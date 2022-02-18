import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar container max-w-screen-2xl mx-auto min-h-full px-5 py-10'>
        <div className='flex justify-around items-center font-medium text-xl'>
            <div className='navbar_logo text-4xl'>UNX</div>
            <div className='navbar_items flex justify-evenly items-center gap-14'>
                <div className='cursor-pointer'>Products</div>
                <div className='cursor-pointer'>About</div>
                <div className='cursor-pointer'>Resources</div>
                <div className='cursor-pointer'>Contact</div>
            </div>
            <div className='navbar_button bg-[#242424] py-3 px-8 rounded-lg'>
                <Link href="/dashboard">Dashboard</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar