import React from 'react'

const Footer = () => {
  return (
    <header className='bg-BG-main text-white w-full'>
        <div className='pl-4 pr-4 pt-40 pb-24 flex justify-evenly items-center'>
            <div className=''>
                <img className='h-12' src={"./logo.png"} />
            </div>
            <div className='flex space-x-10 text-Text-main'>
                <div className='grid justify-items-start'>
                    <a className='hover:text-white' href="#decentralize novel">decentralize novel</a>
                    <a className='hover:text-white' href="#novel list">novel list</a>
                    <a className='hover:text-white' href="#nfts">nfts</a>
                </div>
                <div className='grid justify-items-start'>
                    <a className='hover:text-white' href="#how it work">how it work</a>
                    <a className='hover:text-white' href="#ecosystem">ecosystem</a>
                    <a className='hover:text-white' href="#partner">partner</a>
                </div>
            </div>
            <div className='grid justify-items-start space-y-4'>
                <h2 className="text-lg font-bold text-white"> Join our community </h2>
                <div className='flex space-x-8'>
                    <img className='h-12' src="/Twitter.png" alt="" />
                    <img className='h-12' src="/Telegram.png" alt="" />
                    <img className='h-12' src="/Discord.png" alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Footer