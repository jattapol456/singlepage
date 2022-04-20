import React, { Component } from "react";
import Slider from "react-slick";

export default class SlideBanner extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide: any, nextSlide: any) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide: any) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className='banner' src={"./banner.png"} />
          </div>
          <div>
            <img className='banner' src={"./banner.png"} />
          </div>
          <div>
            <img className='banner' src={"./banner.png"} />
          </div>
          
        </Slider>
      </div>
    );
  }
}