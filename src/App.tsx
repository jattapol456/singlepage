import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SlideBanner from "./components/slide/SliderBanner";
import SliderRectangle from "./components/slide/SliderRectangle";

const App = () => {
  return (
    <body className="bg-BG-main">
      <Navbar />
      <div className="relative h-[100vh]" id="decentralize novel">
        <img  className="absolute left-[25%] top-[2%] scale-[70%]" src="/bg-section1.png"  alt="" />
        <div className="flex flex-col lg:flex-row h-full lg:ml-[15%]">
          <div className="max-w-[512px] mx-auto flex flex-col justify-center aspect-auto scale-[50%] lg:scale-[100%] md:scale-[60%]">
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

          <div className="max-w-[512px] mx-auto flex flex-col justify-center lg:-mt-0 md:-mt-28 -mt-40 xl:scale-[105%] lg:scale-[90%] md:scale-[60%] scale-[50%]">
            <SlideBanner />
          </div>
        </div>
      </div>

      <div className="h-[100vh]" id="how it work">
        <div className="bg-section2">
          <img className="absolute h-full w-full" src="/bg-section2.png" alt="" />
        </div>
        <div className="relative h-full w-full flex flex-col justify-center items-center scale-[140%] -left-[20%]">
          <div className="circle absolute rounded-100% mx-auto h-[28em] w-[66em] lg:border">
            <img className="absolute h-[20%] md:h-[28%] left-[45%] md:left-[40%] lg:left-[38%] top-[5%] md:-top-[10%]" src="/work1.png" alt="" />
          </div>
          <div className="circle absolute border-white rounded-100% mx-auto h-[22em] w-[54em] lg:border">
            <img  className="absolute h-[20%] md:h-[28%] left-[66%] md:left-[66%] lg:left-[73%] top-[15%] md:top-[5%] lg:-top-[4%]" src="/work2.png"  alt="" />
            <img className="absolute h-[20%] md:h-[28%] left-[43%] md:left-[38%] lg:left-[95%] top-[35%] md:top-[30%] lg:top-[25%]" src="/work3.png" alt="" />
          </div>
          <div className="circle absolute border-white rounded-100% mx-auto h-[16em] w-[40em] lg:border">
            <img className="absolute h-[28%] md:h-[38%] left-[70%] md:left-[70%] lg:left-[84%] top-[60%] md:top-[65%] lg:top-[74%]" src="/work4.png" alt="" />
            <img className="absolute h-[28%] md:h-[38%] left-[42%] md:left-[35%] lg:left-[34%] top-[90%] md:top-[100%] lg:top-[87%]" src="/work5.png" alt="" />
          </div>
          <div className="circle absolute border-white rounded-100% mx-auto h-[10em] w-[26em] lg:border">
            <img className="e1 absolute h-[175%] -top-[45%] left-[15%]" src="/e1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="h-[70vh] md:h-[90vh] lg:h-[100vh]" id="novel list">
        <div className="relative">
          <div className="moont flex">
            <img className="absolute lg:right-[82%] 2xl:right-[80%] top-[12%]" src={"./MoonRT.png"} />
            <img className="absolute lg:left-[82%] 2xl:left-[80%] top-[12%]" src={"./MoonLT.png"} />
          </div>
          <div className="relative h-full w-full flex flex-col justify-center items-center scale-[90%]">
            <SliderRectangle />
          </div>
          <div className="moonb flex">
            <img className="absolute lg:right-[82%] 2xl:right-[80%] bottom-[12%]" src={"./MoonRB.png"} />
            <img className="absolute lg:left-[82%] 2xl:left-[80%] bottom-[12%]" src={"./MoonLB.png"} />
          </div>
        </div>
      </div>

      <div className="h-[80vh] md:h-[90vh] lg:h-[100vh]" id="ecosystem">
        <div className="relative flex justify-center mt-[10%] space-y-16">
          <div className="relative">
            <img
              className="absolute left-[25.8rem] -top-[5rem]"
              src="/s4.png"
              alt=""
            />
            <h1 className="ecosystem font-bold text-white">
              ECOSYSTEM
            </h1>
          </div>
          <div className="absolute">
            <img className="scale-75" src="/ecosytem.png" alt="" />
          </div>
        </div>
      </div>

      <div className="h-[100vh]" id="nfts">
        <div className="relative flex flex-col xl:flex-row h-full">
          <img className="absolute scale-[90%] -right-[23%]" src="/path.png" alt="" />
          <img className="absolute -left-[1%] top-[30%] scale-[80%]" src="/bg-section1.png"  alt="" />
          
          <div className="group">
            <img className="absolute scale-[60%] top-[58%] left-[25%]" src="/cube.png" alt="" />
            <img className="absolute scale-[60%] top-[13%] left-[77.5%]" src="/Group1.png" alt="" />
            <img className="absolute scale-[60%] top-[49%] left-[88.5%]" src="/Group2.png" alt="" />
            <img className="absolute scale-[60%] top-[76%] left-[78%]" src="/Group3.png" alt="" />
          </div>
          <div className="max-w-[512px] mx-auto flex flex-col justify-center items-center">
            <div className="relative space-y-4 grid justify-items-start -top-[12%] left-[6%]">
              <img className="absolute scale-[75%] -top-[35%] left-[86%]" src="/s5.png" alt="" />
              <img className="absolute scale-[68%] top-[90%] -left-[20%]" src="/360.png" alt="" />
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
            <img className="absolute scale-[40%] left-[4%] md:-left-[8%] xl:-left-[21%] -top-[8%] md:-top-[3%] xl:top-[7%] lg:scale-[68%] md:scale-[58%]" src="/Soldier JPG.png" alt="" />
            <img className="absolute scale-[40%] left-[38%] md:left-[46.5%] xl:left-[36.5%] top-[8%] md:top-[15%] xl:top-[27%] lg:scale-[68%] md:scale-[58%]" src="/Ascraeus Mons.png" alt="" />
            <img className="absolute scale-[40%] left-[10%] md:left-[3%] xl:-left-[33%] top-[25%] md:top-[46.5%] xl:top-[46.5%] lg:scale-[68%] md:scale-[58%]" src="/MINER JPG.png" alt="" />
          </div>
        </div>
      </div>
      
      
      <div className="mt-24 h-[50vh] md:h-[80vh] lg:h-[100vh]" id="partner">
        <div className="flex justify-center space-y-20">
          <div className="absolute ">
            <img className="absolute -left-[7rem] -top-[4rem]" src="/s6.png" alt="" />
            <h1 className="partner font-bold text-white aspect-video">PARTNER</h1>
          </div>
          <img className="rectangle173 aspect-square absolute scale-75" src="/Rectangle173.png" alt="" />
        </div>
      </div>

      <Footer />
    </body>
  );
};
export default App;
