
import Slider from "react-slick";
import Style from './gudny.module.scss';
import Lottie from "lottie-react";
import Gift from './gift.json';
import { useRef } from "react";
import { useState } from "react";
import Confetti from 'react-confetti'
import { useWindowSize } from "@react-hook/window-size";
import { useEffect } from "react";

const Slide1 = ({nextSlide}) => {
    return (
    <div onClick={() => nextSlide()} className={Style.wrapper}>
      <img alt="flottust" className={Style.image} src='./gudny/gudny1.jpg' />
      <p className={Style.h1}>Til hamingju með afmælið Guðny</p>
    </div>);
};


const Slide2 = ({nextSlide}) => {
    return (<div className={Style.wrapper}>
    <img alt="flottust" className={Style.image} src='./gudny/gudny2.jpg' />
      <p className={Style.h1}>Við erum fáranlega ánægðir með þig!</p>
    </div>);
};



const Slide3 = ({nextSlide}) => {
    return (<div className={Style.wrapper}>
      <p className={Style.h1}>Til að fagna deginum þínum langar okkur að kaupa, handa þér....</p>
        <img  className={Style.gift} src="./gudny/gift_closed.png"></img>
    </div>);
};


const Slide4 = ({nextSlide}) => {
  return (<div className={Style.wrapper}>
    <p className={Style.h1}>Garn! </p>
    <img className={Style.yarn} src="./gudny/yarn.png"></img>
    <img className={`${Style.gift_open}`} src="./gudny/gift_open.png"></img>
  </div>);
};

const Slide5 = ({nextSlide}) => {
  return (<div className={Style.wrapper}>
    <p className={Style.h1}>og.... </p>
    <img className={Style.gift} src="./gudny/gift_closed.png"></img>
  </div>);
};


const Slide6 = ({nextSlide}) => {
  return (<div className={Style.wrapper}>
    <p className={Style.h1}>Miriam</p>
    <img className={Style.miriam} src="./gudny/madMiri.png"></img>
    <img className={`${Style.gift_open}`} src="./gudny/gift_open.png"></img>
  </div>);
};

const Slide7 = ({nextSlide}) => {
  return (<div className={Style.wrapper}>
    <p className={Style.h1}>Sem vonandi verður að peysu í haust!</p>
    <img className={Style.miriam} src="./gudny/sweater.png"></img>
    <img className={`${Style.gift_open}`} src="./gudny/gift_open.png"></img>
  </div>);
};

const Slide8 = ({nextSlide}) => {
  return (
  <div onClick={() => nextSlide()} className={Style.wrapper}>
    <img alt="flottust" className={Style.image} src='./gudny/saman2.jpg' />
    <p className={Style.h1}>Við hlökkum til í fleirri gæða stunda á hlaupum </p>
  </div>);
};


const Slide9 = ({nextSlide}) => {
  return (<div className={Style.wrapper}>
  <img alt="flottust" className={Style.image} src='./gudny/saman.jpg' />
    <p className={Style.h1}>eða á fjöllum!</p>
  </div>);
};

const Slide10 = ({nextSlide}) => {
  return (<div className={Style.wrapper}>
  <img alt="flottust" className={Style.image} src='./gudny/gudny3.jpg' />
    <p className={Style.h1}>Kalli, Magnus og co!</p>
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
            <Slide8 nextSlide={() => {
            }} />
            <Slide9 nextSlide={() => {
            }} />
            <Slide10 nextSlide={() => {
            }} />
          </Slider>
        </div>
        </>
      );
    };
