// src/components/Layout.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link href="/"><Image src="/logo.png" width={32} height={35} alt="cube" /></Link>
                <nav>
                    <ul className="flex items-center gap-x-8">
                        <Link className="hover:text-purple-400 duration-300" href="/about">About</Link>
                        <Link className="hover:text-purple-400 duration-300" href="/projects">Projects</Link>

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;