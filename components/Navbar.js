import React, { useState } from 'react'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const [menuClosed, setMenuClosed] = useState(true);

    return (
        <>
            {/* Desktop Navbar */}
            <nav className='navbar container hidden md:block  max-w-screen-2xl mx-auto min-h-full '>
                <div className='flex justify-around items-center z-10 fixed top-0 right-0 left-0 bg-[#131313] font-medium text-lg px-5 py-5'>
                    <div className='navbar_logo text-4xl'>
                        UNX
                    </div>
                    <div className='navbar_items flex justify-evenly items-center gap-14'>
                        <div className='cursor-pointer'>
                            Products
                        </div>
                        <div className='cursor-pointer'>
                            About
                        </div>
                        <div className='cursor-pointer'>
                            Resources
                        </div>
                        <div className='cursor-pointer'>
                            Contact
                        </div>
                    </div>
                    <div className='navbar_button bg-[#242424] py-2 px-8 rounded-lg'>
                        <Link href="">Dashboard</Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className='flex md:hidden fixed top-0 left-0 right-0 justify-between items-center z-10 bg-[#131313] py-5 px-5'>
                <div className='navbar_logo text-4xl'>
                    UNX
                </div>
                {
                    menuClosed ? <MenuIcon
                        fontSize="large"
                        className='cursor-pointer'
                        onClick={() => setMenuClosed(!menuClosed)}
                    /> : " "
                }
                {
                    menuClosed ? " " : <CloseIcon
                        fontSize="large"
                        className='cursor-pointer'
                        onClick={() => setMenuClosed(!menuClosed)}
                    />
                }
                <div className={menuClosed ? 'hidden' : 'flex' + ' absolute h-screen top-full left-0 right-0 bg-black flex-col justify-center gap-20 items-center text-lg py-10 px-5'} >
                    <div className='cursor-pointer' onClick={() => setMenuClosed(true)}>
                        Products
                    </div>
                    <div className='cursor-pointer' onClick={() => setMenuClosed(true)}>
                        About
                    </div>
                    <div className='cursor-pointer' onClick={() => setMenuClosed(true)}>
                        Resources
                    </div>
                    <div className='cursor-pointer' onClick={() => setMenuClosed(true)}>
                        Contact
                    </div>
                    <div className='navbar_button bg-[#242424] py-3 w-full text-center rounded-lg'>
                        <Link href="">Dashboard</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar