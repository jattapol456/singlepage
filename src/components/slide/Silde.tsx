import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="">
        <Slider {...settings}>
          
          <div className="Slider relative">
            <img className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 Rectangleimg items-center" src={"./Rectangle.png"} />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                <div className='space-y-2'>
                    <h1 className="text-5xl font-bold text-white"> NOVEL BANNER</h1>
                    <h1 className="text-4xl font-bold text-TextS3">KRYPTON DAWN OF MACHINE</h1>
                </div>
                <div className='pt-6'>
                    <button className='p-2 pl-8 pr-8 text-xl font-bold text-white bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring-offset-0 focus:ring-white'>Launch App</button>
                </div>
            </div>
          </div>
          <div className="Slider relative">
            <img className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 Rectangleimg items-center" src={"./Rectangle.png"} />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                <div className='space-y-2'>
                    <h1 className="text-5xl font-bold text-white"> NOVEL BANNER</h1>
                    <h1 className="text-4xl font-bold text-TextS3">KRYPTON DAWN OF MACHINE</h1>
                </div>
                <div className='pt-6'>
                    <button className='p-2 pl-8 pr-8 text-xl font-bold text-white bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring-offset-0 focus:ring-white'>Launch App</button>
                </div>
            </div>
          </div>
          <div className="Slider relative">
            <img className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 Rectangleimg items-center" src={"./Rectangle.png"} />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                <div className='space-y-2'>
                    <h1 className="text-5xl font-bold text-white"> NOVEL BANNER</h1>
                    <h1 className="text-4xl font-bold text-TextS3">KRYPTON DAWN OF MACHINE</h1>
                </div>
                <div className='pt-6'>
                    <button className='p-2 pl-8 pr-8 text-xl font-bold text-white bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring-offset-0 focus:ring-white'>Launch App</button>
                </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
