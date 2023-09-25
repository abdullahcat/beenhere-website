"use client"; // This is a client component 👈🏽
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`fixed text-white w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-black'}`}>
            <div className="mx-auto   px-4 py-4 flex justify-between items-center">
                <Link className='font-mrs_sheppards text-4xl' href="/">BeenHere</Link>
                <Link
                    href={'http://download.beenhere.live'}
                    className='relative inline-block px-4 py-2 border-2 border-white text-white rounded-full space-x-2 flex flex-row transition duration-300 ease-in-out hover:bg-white hover:text-[#2A4556] hover:border-transparent  '
                >Download</Link>

            </div>
        </div>
    );
}

export default Navbar;
