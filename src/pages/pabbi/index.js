import Slider from "react-slick";
import Style from "./gudny.module.scss";
import { useRef, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { useEffect } from "react";

const Slide1 = ({ nextSlide }) => {
  return (
    <div onClick={() => nextSlide()} className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./pabbi/opna.jpg" />
      <p className={Style.h1}>Til hamingju með afmælið elsku Pabbi</p>
    </div>
  );
};

const Slide2 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./pabbi/number2.jpeg" />
      <p className={Style.h1}>Þú ert ýmislegt</p>
    </div>
  );
};

const Slide3 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img
        alt="flottust"
        className={Style.image}
        src="./pabbi/leidsogumadur.jpg"
      />
      <p className={Style.h1}>Leiðsögumaður</p>
    </div>
  );
};

const Slide4 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img
        alt="flottust"
        className={Style.image}
        src="./pabbi/tonlistarmadur.jpg"
      />
      <p className={Style.h1}>Tónlistarmaður</p>
    </div>
  );
};

const Slide5 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img className={Style.image} src="./pabbi/herramadur.png"></img>
      <p className={Style.h1}>Herramaður</p>
    </div>
  );
};

const Slide6 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img className={Style.image} src="./pabbi/formadur.jpg"></img>

      <p className={Style.h1}>Formaður</p>
    </div>
  );
};

const Slide7 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img
        alt="flottust"
        className={Style.image}
        src="./pabbi/gardyrkjumadur.jpg"
      />
      <p className={Style.h1}>Garðyrkjumaður</p>
    </div>
  );
};

const Slide8 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img
        alt="flottust"
        className={Style.image}
        src="./pabbi/fyrirsaetumadur.jpg"
      />
      <p className={Style.h1}>Fyrirsátumaður!</p>
    </div>
  );
};

const Slide9 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./pabbi/pabbi.jpg" />
      <p className={Style.h1}>
        En fyrir okkur ertu fyrst og fremst heimsins besti pabbi...
      </p>
    </div>
  );
};

const Slide10 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./pabbi/saman.jpg" />
      <p className={Style.h1}>... og afi!</p>
    </div>
  );
};

const Slide11 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./pabbi/hlaup.png" />
      <p className={Style.h1}>
        Okkur langar til að bjóða þér með okkur í 2(eða þriggja ef þú ert í
        formi) landa hlaup í Október.
      </p>
    </div>
  );
};

const Slide12 = ({ nextSlide }) => {
  return (
    <div className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src="./pabbi/gamall.jpeg" />
      <p className={Style.h1}>
        Við elskum þig og hlökkum til næstu 70 ára! Mynd frá Prag 2095
      </p>
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
          <Slide11 nextSlide={() => {}} />
          <Slide12 nextSlide={() => {}} />
        </Slider>
      </div>
    </>
  );
}
