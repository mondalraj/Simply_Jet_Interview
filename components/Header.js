import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='navbar container max-w-screen-2xl mx-auto px-5 pt-10 mt-28 text-center'>
            <div className='text-4xl md:text-5xl font-bold tracking-wide pb-2'>The Best Way to</div>
            <div className='text-4xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#A5D9FF] to-[#7399FB]'>Track your Daily Progress</div>
            <div className='text-[#B0B0B0] max-w-3xl mx-auto tracking-wider text-lg md:text-xl my-10'>
                UNX Allows you to track all your daily task progress using gamification methods and earn rewards for specific coupons
            </div>
            <button className='bg-[#2104D8] py-3 text-lg px-14 rounded-lg'>Try this app</button>
            <div className='mt-20 md:mt-16'>
                <Image
                    src="/images/header_image.png"
                    width={1160}
                    height={480}
                />
            </div>
        </header>
    )
}

export default Header