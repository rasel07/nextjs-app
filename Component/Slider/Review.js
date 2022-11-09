import React, { Component, useRef } from "react";
import Slider from "react-slick";
import { HiArrowNarrowLeft, HiArrowNarrowRight  } from "react-icons/hi"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from './style.module.css'

const Review = () => {

  const slider = useRef(null);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className={Style.main}>
        <div className={Style.sec1}></div>
        <div className={Style.sec2}></div>
        <div className={Style.container}>
        <div className={Style.iconWrapper}><HiArrowNarrowLeft onClick={() => slider?.current?.slickPrev()} className={Style.left} /> <HiArrowNarrowRight onClick={() => slider?.current?.slickNext()} className={Style.right}/></div>
            <Slider {...settings} ref={slider} className={Style.wrapper}>
            <div className={Style.slide}>
                <h3>This is heading1</h3>
                <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className={Style.slide}>
            <h3>This is heading2</h3>
                <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className={Style.slide}>
            <h3>This is heading3</h3>
                <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className={Style.slide}>
            <h3>This is heading4</h3>
                <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className={Style.slide}>
            <h3>This is heading5</h3>
                <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className={Style.slide}>
            <h3>This is heading6</h3>
                <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className={Style.slide}>
            <h3>This is heading7</h3>
                <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className={Style.slide}>
            <h3>This is heading8</h3>
                <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
            </div>
            </Slider>
        </div>
    </div>
  )
}

export default Review