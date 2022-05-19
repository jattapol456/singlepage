import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderRectangle extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: function(currentSlide: any, nextSlide: any) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide: any) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div className="h-full w-full scale-75">
        <Slider {...settings}>
          <div className="">
            <div className="flex flex-col justify-center items-center">
              <img className="" src={"./Rectangle.png"} />
              <div className="absolute text-center scale-[40%] lg:scale-[100%] md:scale-[70%] sm:scale-[50%]">
                <div className='space-y-2'>
                  <h1 className="text-7xl font-bold text-white">NOVEL BANNER</h1>
                  <h1 className="text-6xl font-bold text-TextS3">KRYPTON DAWN OF MACHINE</h1>
                </div>
                <div className='text-white pt-6'>
                  <button className='p-4 pl-8 pr-8 text-3xl font-bold bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring-offset-0 focus:ring-white'>Lunch App</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="">
            <div className="flex flex-col justify-center items-center">
              <img className="" src={"./Rectangle.png"} />
              <div className="absolute text-center scale-[40%] lg:scale-[100%] md:scale-[70%] sm:scale-[50%]">
                <div className='space-y-2'>
                  <h1 className="text-7xl font-bold text-white">NOVEL BANNER</h1>
                  <h1 className="text-6xl font-bold text-TextS3">KRYPTON DAWN OF MACHINE</h1>
                </div>
                <div className='text-white pt-6'>
                  <button className='p-4 pl-8 pr-8 text-3xl font-bold bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring-offset-0 focus:ring-white'>Lunch App</button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center">
              <img className="" src={"./Rectangle.png"} />
              <div className="absolute text-center scale-[40%] lg:scale-[100%] md:scale-[70%] sm:scale-[50%]">
                <div className='space-y-2'>
                  <h1 className="text-7xl font-bold text-white">NOVEL BANNER</h1>
                  <h1 className="text-6xl font-bold text-TextS3">KRYPTON DAWN OF MACHINE</h1>
                </div>
                <div className='text-white pt-6'>
                  <button className='p-4 pl-8 pr-8 text-3xl font-bold bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring-offset-0 focus:ring-white'>Lunch App</button>
                </div>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}
