import React from 'react'

const Navbar = () => {
  return (
    <header className='p-3 bg-BG-main text-white fixed z-50 w-full'>
        <div className='pl-4 pr-4 flex justify-between items-center'>
            <div className=''>
                <img className='h-12' src={"./logo.png"} />
            </div>
            <div className='flex space-x-10 text-Text-main'>
                <a className='hover:text-white' href="#decentralize novel">decentralize novel</a>
                <a className='hover:text-white' href="#how it work">how it work</a>
                <a className='hover:text-white' href="#novel list">novel list</a>
                <a className='hover:text-white' href="#ecosystem">ecosystem</a>
                <a className='hover:text-white' href="#nfts">nfts</a>
                <a className='hover:text-white' href="#partner">partner</a>
            </div>
            <div className='space-x-2'>
                <button className='p-2 pl-6 pr-6 font-bold bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring focus:ring-white'>Lunch App</button>
                <button className='p-2 pl-6 pr-6 font-bold bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring focus:ring-white'>Connet wallet</button>
            </div>
        </div>
    </header>
  )
}

export default Navbar