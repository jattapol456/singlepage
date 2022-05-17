import React from "react";

const Footer = () => {
  return (
    <header className="bg-BG-main text-white w-full">
      <div className="p-[100px] flex justify-evenly items-center">
        <div className="">
          <img className="h-12" src={"./logo.png"} />
        </div>
        <div className="flex space-x-10 text-Text-main">
          <div className="grid justify-items-start">
            <a className="hover:text-white text-xl" href="#decentralize novel">
              decentralize novel
            </a>
            <a className="hover:text-white text-xl" href="#novel list">
              novel list
            </a>
            <a className="hover:text-white text-xl" href="#nfts">
              nfts
            </a>
          </div>
          <div className="grid justify-items-start">
            <a className="hover:text-white text-xl" href="#how it work">
              how it work
            </a>
            <a className="hover:text-white text-xl" href="#ecosystem">
              ecosystem
            </a>
            <a className="hover:text-white text-xl" href="#partner">
              partner
            </a>
          </div>
        </div>
        <div className="grid justify-items-start space-y-4">
          <h2 className="text-lg font-bold text-white"> Join our community </h2>
          <div className="flex space-x-8">
            <img className="h-10" src="/Twitter.png" alt="" />
            <img className="h-10" src="/Telegram.png" alt="" />
            <img className="h-10" src="/Discord.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
