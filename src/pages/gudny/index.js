
import Slider from "react-slick";
import Style from './gudny.module.scss';
import Lottie from "lottie-react";
import { useRef } from "react";
import Confetti from 'react-confetti'
import { useWindowSize } from "@react-hook/window-size";
import { useEffect } from "react";

const Slide1 = ({nextSlide}) => {
    return (
    <div onClick={() => nextSlide()} className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src='./gudny/baby.png' />
      <p className={Style.h1}>Til hamingju með afmælið elsku Guðny</p>
    </div>);
};


const Slide2 = ({nextSlide}) => {
    return (<div className={Style.wrapper}>
    <img alt="flottust" className={Style.image} src='./gudny/koss.png' />
      <p className={Style.h1}>Hér er stafrænn afmæliskoss frá okkur í Vín</p>
    </div>);
};


const Slide3 = ({nextSlide}) => {
  return (<div className={Style.wrapper}>
  <img alt="flottust" className={Style.image} src='./gudny/fjoll.png' />
    <p className={Style.h1}>Okkur finnst þú frekar flott á fjöllum!</p>
  </div>);
};

const Slide4 = ({nextSlide}) => {
  return (<div className={Style.wrapper}>
  <img alt="flottust" className={Style.image} src='./gudny/ludi.png' />
    <p className={Style.h1}>Og líka bara yfir höfuð<small>(samt smá lúði á þessari mynd)!</small></p>
  </div>);
};

const Slide5 = ({nextSlide}) => {
    return (<div className={Style.wrapper}>
      <img  className={Style.image} src="./gudny/vin.jpeg"></img>
      <p className={Style.h1}>Til að fagna deginum þínum langar okkur að splæsa nokkrar unmferðir á barinn.</p>
    </div>);
};


const Slide6 = ({nextSlide}) => {
  return (<div className={Style.wrapper}>
          <img className={Style.image} src="./gudny/vin.jpeg"></img>

    <p className={Style.h1}>Þetta ætti að koma til þín í kvöld ef ég skil það rétt.</p>
  </div>);
};


const Slide7 = ({nextSlide}) => {
  return (<div className={Style.wrapper}>
  <img alt="flottust" className={Style.image} src='./gudny/saman.png' />
    <p className={Style.h1}>Hlökkum til að hitta þig á Ísland</p>
    <p> Magnus og co!</p>
  </div>);
};


// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function() {
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));

  }, []);
  const slider = useRef(null)
  const [ width, height ] = useWindowSize();
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
          {slider.current && <Confetti
          width={width}
          height={height}
          />}
        <div className={Style.slider_wrapper}>
          <Slider ref={slider} {...settings}>
            <Slide1 nextSlide={() => {
            }} />
            <Slide2 nextSlide={() => {
            }} />
            <Slide3 nextSlide={() => {
            }} />
            <Slide4 nextSlide={() => {
            }} />
            <Slide5 nextSlide={() => {
            }} />
            <Slide6 nextSlide={() => {
            }} />
            <Slide7 nextSlide={() => {
            }} />
          </Slider>
        </div>
        </>
      );
    };
