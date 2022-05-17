import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SlideBanner from "./components/slide/SliderBanner";
import SliderRectangle from "./components/slide/SliderRectangle";

const App = () => {
  return (
    <body className="bg-BG-main">
      <Navbar />
      <div className="h-[100vh]" id="decentralize novel">
        <div className="flex h-full ml-[15%]">
          <img
            className="absolute ml-[30%] mt-[3%] h-[40%]"
            src="/bg-section1.png"
            alt=""
          />
          <div className="max-w-[512px] ml-auto flex flex-col justify-center">
            <div className="space-y-6">
              <div className="space-y-6">
                <img className="" src="/Decentralize Novel.png" alt="" />
                <p className="mt-4 text-2xl text-white">
                  let build new world form text
                </p>
              </div>
              <div className="space-x-6 pt-14 text-white">
                <button className="p-3 pl-8 pr-8 text-2xl font-bold bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring-offset-0 focus:ring-white">
                  Lunch App
                </button>
                <button className="p-3 pl-8 pr-8 text-2xl font-bold bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring-offset-0 focus:ring-white">
                  Buy Token
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[512px] scale-[100%] mx-auto flex flex-col justify-center">
            <SlideBanner />
          </div>
        </div>
      </div>

      <div className="h-[100vh]" id="how it work">
        <img className="absolute h-full w-full" src="/bg-section2.png" alt="" />
        <div className="relative h-full w-full flex flex-col justify-center items-center scale-[140%] -left-[20%]">
          <div className="absolute border border-white rounded-100% mx-auto h-[60%] w-[72%]">
            <img
              className="absolute h-[28%] left-[38%] -top-[10%]"
              src="/work1.png"
              alt=""
            />
          </div>
          <div className="absolute border border-white rounded-100% mx-auto h-[47%] w-[59%]">
            <img
              className="absolute h-[28%] left-[73%] -top-[4%]"
              src="/work2.png"
              alt=""
            />
            <img
              className="absolute h-[28%] left-[95%] top-[25%]"
              src="/work3.png"
              alt=""
            />
          </div>
          <div className="absolute border border-white rounded-100% mx-auto h-[34%] w-[46%]">
            <img
              className="absolute h-[38%] left-[84%] top-[74%]"
              src="/work4.png"
              alt=""
            />
            <img
              className="absolute h-[38%] left-[34%] top-[87%]"
              src="/work5.png"
              alt=""
            />
          </div>
          <div className="absolute border border-white rounded-100% mx-auto h-[21%] w-[33%]">
            <img
              className="absolute h-[175%] -top-[45%] left-[15%]"
              src="/e1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="h-[100vh]" id="novel list">
        <div className="relative">
          <div className="flex">
            <img className="absolute right-[84%] top-[9%]" src={"./MoonRT.png"} />
            <img className="absolute left-[84%] top-[9%]" src={"./MoonLT.png"} />
          </div>
          <div className="relative h-full w-full flex flex-col justify-center items-center ">
            <SliderRectangle />
          </div>
          <div className="flex">
            <img className="absolute right-[84%] bottom-[9%]" src={"./MoonRB.png"} />
            <img className="absolute left-[84%] bottom-[9%]" src={"./MoonLB.png"} />
          </div>
        </div>
      </div>

      <div className="h-[100vh]" id="ecosystem">
        <div className="relative flex justify-center mt-[10%] space-y-16">
          <div className="relative">
            <img
              className="absolute left-[28.5rem] -top-[5.8rem]"
              src="/s4.png"
              alt=""
            />
            <h1 className="text-6xl font-bold text-white">
              E C O S Y S T E M
            </h1>
          </div>
          <div className="absolute">
            <img className="scale-75" src="/ecosytem.png" alt="" />
          </div>
        </div>
      </div>

      <div className="h-[100vh]" id="nfts">
        <div className="relative flex h-full">
          <img className="absolute scale-[90%] -right-[23%]" src="/path.png" alt="" />
          <img className="absolute scale-[68%] top-[52%] right-[85%]" src="/360.png" alt="" />
          <img className="absolute scale-[60%] top-[58%] right-[62%]" src="/cube.png" alt="" />
          <img className="absolute scale-[60%] top-[13%] right-[15%]" src="/Group1.png" alt="" />
          <img className="absolute scale-[60%] top-[49%] right-[7%]" src="/Group2.png" alt="" />
          <img className="absolute scale-[60%] top-[76%] right-[10%]" src="/Group3.png" alt="" />
          <div className="max-w-[512px] ml-auto flex flex-col justify-center">
            <div className="relative space-y-4 grid justify-items-start -top-[12%] left-[6%]">
              <img className="absolute scale-[75%] -top-[35%] left-[86%]" src="/s5.png" alt="" />
              <div className="grid justify-items-start">
                <h1 className="text-6xl font-bold text-white"> CREATE NFT </h1>
              </div>
              <div className="grid justify-items-start space-y-3">
                <h1 className="text-5xl text-white"> FROM NOCEL AND </h1>
                <h1 className="text-5xl text-white"> USE IN GAMEFI </h1>
              </div>
            </div>
          </div>

          <div className="relative max-w-[512px] h-full w-full mx-auto">
            <img className="absolute scale-[68%] -left-[11%] top-[7%]" src="/Soldier JPG.png" alt="" />
            <img className="absolute scale-[68%] left-[46.5%] top-[27%]" src="/Ascraeus Mons.png" alt="" />
            <img className="absolute scale-[68%] -left-[23%] top-[46.5%]" src="/MINER JPG.png" alt="" />
          </div>
        </div>
      </div>
      
      
      <div className="h-[100vh] mt-24" id="partner">
        <div className="flex justify-center space-y-20">
          <div className="relative">
            <img
              className="absolute -left-[7rem] -top-[5rem]"
              src="/s6.png"
              alt=""
            />
            <h1 className="text-6xl font-bold text-white"> P A R T N E R </h1>
          </div>
          <img
            className="rectangle173 aspect-square absolute scale-75"
            src="/Rectangle173.png"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </body>
  );
};
export default App;
