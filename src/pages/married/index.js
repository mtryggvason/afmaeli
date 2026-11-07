import Slider from "react-slick";
import Style from "./married.module.scss";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { Great_Vibes } from "next/font/google";

const signatureFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

// `ratio` is the shown width / height. Slides 1 and 2 are slightly shorter than
// their files, which trims the "PORTRAIT" screenshot badge off the top. The
// sun_face slide is slightly narrower, which trims a white strip off the right.
const SLIDES = [
  {
    src: "./marriage/slide_1.jpg",
    ratio: 1138 / 1320,
    text: "Dear Thomas and Guðný, congratulations on your big day",
  },
  {
    src: "./marriage/slide_2.jpg",
    ratio: 1150 / 1100,
    text: "May the wind always be at your back (unlike in this picture)",
  },
  {
    src: "./marriage/sun_face.jpg",
    ratio: 996 / 1150,
    text: "May the sun shine warm upon your face",
  },
  {
    src: "./marriage/slide_3.jpg",
    ratio: 978 / 1010,
    text: "We are so happy for you",
  },
  {
    src: "./marriage/family.jpg",
    ratio: 980 / 790,
    text: "and your beautiful family!",
  },
  {
    text: "And until we meet again, may your home always be full of love, laughter and plenty of Matilde that you got for a good price.",
    signature: "Karl, Magnus, Miriam, Andrea, Ísadóra, Baldur and Salka",
  },
];

const MUSIC_FADE_IN_SECONDS = 6;

const Video = ({ src, active, style }) => {
  const video = useRef(null);

  useEffect(() => {
    const element = video.current;
    if (!active) {
      element.pause();
      return;
    }
    element.currentTime = 0;
    element.muted = false;
    element.play().catch(() => {
      // The browser refused sound, so play without it rather than not at all.
      element.muted = true;
      element.play().catch(() => {});
    });
  }, [active]);

  return (
    <video
      ref={video}
      className={Style.media}
      style={style}
      src={src}
      playsInline
      preload="auto"
    />
  );
};

const Slide = ({ slide, active }) => {
  if (!slide.src) {
    return (
      <div className={Style.wrapper}>
        <div className={Style.message}>
          <p className={Style.message_text}>{slide.text}</p>
          <p className={Style.signature}>
            With love,
            <br />
            {slide.signature}
          </p>
        </div>
      </div>
    );
  }

  const style = { "--ratio": slide.ratio };
  return (
    <div className={Style.wrapper}>
      {slide.video ? (
        <Video src={slide.src} active={active} style={style} />
      ) : (
        <img alt="" className={Style.media} style={style} src={slide.src} />
      )}
      <p className={Style.text}>{slide.text}</p>
    </div>
  );
};

export default function Married() {
  const [startConfetti, setStartConfetti] = useState(false);
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
    setStartConfetti(true);
  }, []);

  const slider = useRef(null);
  // Only updated once a fade has finished, so a double tap on the second to
  // last slide can't skip the last slide and jump straight to the card.
  const settledSlide = useRef(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardOpen, setCardOpen] = useState(false);
  const [width, height] = useWindowSize();

  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: false,
    speed: 500,
    swipe: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentSlide(next),
    afterChange: (index) => {
      settledSlide.current = index;
    },
  };

  const music = useRef(null);
  const [started, setStarted] = useState(false);
  const start = () => {
    setStarted(true);
    // Keeps the music audible on an iPhone with its silent switch on.
    if (navigator.audioSession) navigator.audioSession.type = "playback";
    // Web Audio because iPhones ignore changes to an audio element's volume.
    const context = new AudioContext();
    const gain = context.createGain();
    context
      .createMediaElementSource(music.current)
      .connect(gain)
      .connect(context.destination);
    gain.gain.value = 0;
    // Wait for "playing" so a slow download can't use up the fade in silence.
    music.current.addEventListener(
      "playing",
      () => {
        const now = context.currentTime;
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(1, now + MUSIC_FADE_IN_SECONDS);
      },
      { once: true }
    );
    music.current.play().catch(() => {});
  };

  const handleTap = () => {
    if (settledSlide.current < SLIDES.length - 1) {
      slider.current.slickNext();
    } else {
      setCardOpen(true);
    }
  };

  return (
    <>
      {startConfetti && <Confetti width={width} height={height} />}
      <audio ref={music} src="./marriage/song.mp3" loop preload="auto" />
      <div className={`${Style.intro} ${started ? Style.intro_done : ""}`}>
        <p className={`${Style.intro_title} ${signatureFont.className}`}>
          For Thomas and Guðný
        </p>
        <div>
          <button
            type="button"
            className={Style.next_button}
            onClick={start}
            disabled={started}
          >
            Start Here
          </button>
          <p className={Style.sound_note}>🔊 Sound on</p>
        </div>
      </div>
      <div onClick={handleTap} className={Style.slider_wrapper}>
        <button type="button" className={Style.next_button}>
          Ýta hér
        </button>
        <Slider ref={slider} {...settings}>
          {SLIDES.map((slide, index) => (
            <Slide
              key={slide.text}
              slide={slide}
              active={!cardOpen && index === currentSlide}
            />
          ))}
        </Slider>
      </div>
      <div
        className={`${Style.card} ${cardOpen ? Style.card_open : ""}`}
        aria-hidden={!cardOpen}
      >
        <a
          href="./marriage/Wedding%20Pizza%20Card.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={Style.card_image}
            src="./marriage/card.jpg"
            alt="Wedding Pizza Card: a voucher for a pizza oven from Karl and Magnus"
          />
        </a>
      </div>
    </>
  );
}
