import Slider from "react-slick";
import Style from "./gudny.module.scss";
import { useRef, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { useEffect } from "react";

const Slide1 = ({ nextSlide }) => {
  return (
    <div onClick={() => nextSlide()} className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./mamma/epik.png" />
      <p className={Style.h1}>Til hamingju með afmælið elsku Mamma!</p>
    </div>
  );
};

const Slide2 = ({ nextSlide }) => {
  return (
    <div onClick={() => nextSlide()} className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./mamma/saman.png" />
      <p className={Style.h1}>
        Þú ert líklega það besta sem hefur komið fyrir okkur
      </p>
    </div>
  );
};

const Slide3 = ({ nextSlide }) => {
  return (
    <div onClick={() => nextSlide()} className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./mamma/stelpur.png" />
      <p className={Style.h1}>líka fyrir þessar</p>
    </div>
  );
};

const Slide4 = ({ nextSlide }) => {
  return (
    <div onClick={() => nextSlide()} className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./mamma/baldur.png" />
      <p className={Style.h1}>og þessi</p>
    </div>
  );
};

const Slide5 = ({ nextSlide }) => {
  return (
    <div onClick={() => nextSlide()} className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./mamma/salka.png" />
      <p className={Style.h1}>og þessa</p>
    </div>
  );
};

const Slide6 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./mamma/fyrirmynd.png" />
      <p className={Style.h1}>Þú ert fyrirmyndin okkar</p>
    </div>
  );
};

const Slide7 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./mamma/askorun.png" />
      <p className={Style.h1}>Óhrædd við áskoranir...</p>
    </div>
  );
};

const Slide8 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./mamma/hnefi.png" />
      <p className={Style.h1}>...sama hversu vitlausar þær eru!</p>
    </div>
  );
};

const Slide9 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./mamma/tonleikar.png" />
      <p className={Style.h1}>
        Okkur langar til að bjóða þér og pabba á nýarstónleika í Köben
      </p>
    </div>
  );
};

const Slide10 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./mamma/skal.png" />
      <p className={Style.h1}>Skál fyrir þér!</p>
    </div>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  const [startConfetti, setStartConfetti] = useState(false);
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
    setStartConfetti(true);
  }, []);
  const slider = useRef(null);
  const [width, height] = useWindowSize();
  const settings = {
    dots: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
  };
  return (
    <>
      {slider.current && <Confetti width={width} height={800} />}
      <div
        onClick={() => {
          slider.current.slickNext();
        }}
        className={Style.slider_wrapper}
      >
        <Slider ref={slider} {...settings}>
          <Slide1 nextSlide={() => {}} />
          <Slide2 nextSlide={() => {}} />
          <Slide3 nextSlide={() => {}} />
          <Slide4 nextSlide={() => {}} />
          <Slide5 nextSlide={() => {}} />
          <Slide6 nextSlide={() => {}} />
          <Slide7 nextSlide={() => {}} />
          <Slide8 nextSlide={() => {}} />
          <Slide9 nextSlide={() => {}} />
          <Slide10 nextSlide={() => {}} />
        </Slider>
      </div>
    </>
  );
}
