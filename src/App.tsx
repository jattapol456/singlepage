import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import SimpleSlider from './components/slide/Silde';
function App() {
    return (
        <div className="App">
            <body className='bg-BG-main'>
                <Navbar/>
                <section className='relative flex justify-around items-center ml-52' id='decentralize novel'>
                    <div className='space-y-4 grid justify-items-start'>
                        <img className='absolute h-80 ml-28 -mt-24' src="/bg-section1.png" alt="" />
                        <div className='grid justify-items-start'>
                            <h1 className="text-6xl font-bold text-white"> DECENTRALIZE </h1>
                            <h1 className="text-6xl font-bold text-white"> NOVEL </h1>
                        </div>
                        <div>
                            <h1 className="text-xl text-white"> let build new world form text </h1>
                        </div>
                        <div className='space-x-4 text-white pt-10'>
                            <button className='p-3 pl-8 pr-8 text-xl font-bold bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring-offset-0 focus:ring-white'>Lunch App</button>
                            <button className='p-3 pl-8 pr-8 text-xl font-bold bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring focus:ring-white'>Buy Token</button>
                        </div>
                    </div>
                    <div className='mt-14'>
                        <img className='banner' src={"./banner.png"} />
                    </div>
                </section>

                <section className='items-center' id='how it work'>
                    <div className='relative h-full w-full'>
                        <img className='absolute h-full w-full' src="/bg-section2.png" alt="" />
                        <div className='relative h-full w-screen'>
                            <img className='Ellipse absolute h-full w-screen' src="/Ellipse.png" alt="" />
                            <div className='relative items-center '>
                                <img className='e1 absolute' src="/e1.png" alt="" />
                                <img className='work1 absolute h-36' src="/work1.png" alt="" />
                                <img className='work2 absolute h-36' src="/work2.png" alt="" />
                                <img className='work3 absolute h-36' src="/work3.png" alt="" />
                                <img className='work4 absolute h-36' src="/work4.png" alt="" />
                                <img className='work5 absolute h-36' src="/work5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className='items-center p-10' id='novel list'>
                    <div className='items-center'>
                        <div className='flex justify-around space-x-96'>
                            <img className='pr-44' src={"./MoonRT.png"} />
                            <img src={"./MoonLT.png"} />
                        </div>
                        <div className=''>
                            <SimpleSlider/>
                        </div>
                        <div className='flex justify-around space-x-96'>
                            <img className='pr-44' src={"./MoonRB.png"} />
                            <img src={"./MoonLB.png"} />
                        </div>
                    </div>
                </section>

                <section className='p-24 pt-40' id='ecosystem'>
                    <div className='relative'>
                        <img className='s4 absolute' src="/s4.png" alt="" />
                        <h1 className="text-5xl font-bold text-white"> E C O S Y S T E M </h1>
                        <img className='ecosytem pt-20 h-screen' src="/ecosytem.png" alt="" />
                    </div>
                </section>

                <section className='pt-24' id='nfts'>
                    <div className='relative h-full w-full'>
                        <img className='absolute h-full w-full' src="/bg-section2.png" alt="" />
                        <img className='absolute h-96 mt-52' src="/bg-section5.png" alt="" />
                        <img className='path absolute h-full w-full' src="/path.png" alt="" />
                        <img className='Ascraeus absolute' src="/Ascraeus Mons.png" alt="" />
                        <img className='Soldier absolute' src="/Soldier JPG.png" alt="" />
                        <img className='MINER absolute' src="/MINER JPG.png" alt="" />
                        <img className='g360 absolute' src="/360.png" alt="" />
                        <img className='cube absolute' src="/cube.png" alt="" />
                        <img className='s5 absolute' src="/s5.png" alt="" />
                        <img className='Group1 absolute h-full' src="/Group1.png" alt="" />
                        <img className='Group2 absolute h-full' src="/Group2.png" alt="" />
                        <img className='Group3 absolute h-full' src="/Group3.png" alt="" />
                        <div className='space-y-4 grid justify-items-start pt-64 pl-80'>
                            <div className='grid justify-items-start'>
                                <h1 className="text-6xl font-bold text-white"> CREATE NFT </h1>
                            </div>
                            <div className='grid justify-items-start'>
                                <h1 className="text-5xl text-white"> FORM NOCEL AND </h1>
                                <h1 className="text-5xl text-white"> USE IN GAMEFI </h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='p-10' id='partner'>
                    <div className='relative pt-40'>
                        <img className='s6 absolute' src="/s6.png" alt="" />
                        <h1 className="text-5xl font-bold text-white"> P A R T N E R </h1>
                        <img className='Rectangle173 m-auto pt-20' src="/Rectangle173.png" alt="" />
                    </div>
                </section>

                
                <Footer/>
            </body>
        </div>
    );
}

export default App;
