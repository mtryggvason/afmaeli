
import Slider from "react-slick";
import Style from './gudny.module.scss';

import { useRef } from "react";import Confetti from 'react-confetti'
import { useWindowSize } from "@react-hook/window-size";
import { useEffect } from "react";

const Slide1 = ({nextSlide}) => {
    return (
    <div onClick={() => nextSlide()} className={Style.wrapper}>
      <img alt="flottastur" className={Style.image} src='./kalli/kalli1.png' />
      <p className={Style.h1}>Til hamingju með áratuginn Elsku Kalli</p>
    </div>);
};


const Slide2 = ({nextSlide}) => {
  return (
  <div onClick={() => nextSlide()} className={Style.wrapper}>
    <img alt="flottastur" className={Style.image} src='./kalli/kallisjoræningi.jpg' />
    <p className={Style.h1}>Okkur finnst þú tuddalega flottur, sérstaklega sem sjóræningji!</p>
  </div>);
};



const Slide3 = ({nextSlide}) => {
  return (
  <div onClick={() => nextSlide()} className={Style.wrapper}>
    <img alt="flottastur" className={Style.image} src='./kalli/kallitre.jpg' />
    <p className={Style.h1}>Þú er fyrirmynd</p>
  </div>);
};

const Slide4 = ({nextSlide}) => {
  return (
  <div onClick={() => nextSlide()} className={Style.wrapper}>
    <img alt="flottastur" className={Style.image} src='./kalli/kalli_simi.png' />
    <p className={Style.h1}>alltaf til að gef góð ráð...  </p>
  </div>);
};


const Slide5 = ({nextSlide}) => {
  return (
  <div onClick={() => nextSlide()} className={Style.wrapper}>
    <img alt="flottastur" className={Style.image} src='./kalli/kalli_embla.jpg' />
    <p className={Style.h1}>... og hjálpa okkur í kringum þig að ná hærra  </p>
  </div>);
};



const Slide6 = ({nextSlide}) => {
  return (
  <div onClick={() => nextSlide()} className={Style.wrapper}>
    <img alt="flottastur" className={Style.image} src='./kalli/kalli_gudny.jpg' />
    <p className={Style.h1}>Við elskum þig... </p>
  </div>);
};


const Slide7 = ({nextSlide}) => {
  return (
  <div onClick={() => nextSlide()} className={Style.wrapper}>
    <img alt="flottastur" className={Style.image} src='./kalli/kalligitar.jpg' />
    <p className={Style.h1}>...og njótum þess að vera með þér</p>
  </div>);
};

const Slide8 = ({nextSlide}) => {
  return (
  <div onClick={() => nextSlide()} className={Style.wrapper}>
    <img alt="flottastur" className={Style.image} src='./kalli/kallimagnus.jpg' />
    <p className={Style.h1}>nema kannski á þessu augnabliki</p>
  </div>);
};

const Slide9 = ({nextSlide}) => {
  return (
  <div onClick={() => nextSlide()} className={Style.wrapper}>
    <img alt="flottastur" className={Style.image} src='./kalli/kalli_gudny2.png' />
    <p className={Style.h1}>en bókað á þessu!</p>
  </div>);
};


 
const Slide10 = ({nextSlide}) => {
  return (
  <div onClick={() => nextSlide()} className={Style.wrapper}>
    <img alt="flottastur" className={Style.image} src='./kalli/kalli_club.jpg' />
    <p className={Style.h1}>og þessu!</p>
  </div>);
};


const Slide11 = ({nextSlide}) => {
  return (
  <div onClick={() => nextSlide()} className={Style.wrapper}>
    <img alt="flottastur" className={Style.image} src='./kalli/old.jpg' />
    <p className={Style.h1}>Hlökkum til að eyða næstu 40 árum með þér!</p>
    <small>(Nýtt Strava plugin sem áætlar hvernig þú lýtur út eftir 40 ár byggt á gögnum frá Strava)</small>
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
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
            <Slide6 />
            <Slide7 />
            <Slide8 />
            <Slide9 />
            <Slide10 />
            <Slide11 />
          </Slider>
        </div>
        </>
      );
    };
