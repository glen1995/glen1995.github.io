// src/components/Layout.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 mt-44">
            <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
                <small className=" duration-200 font-mono">All rights reserved © 2024
                </small>
                <small className="hover:text-white duration-200">
                    <Link className="" href="https://github.com/glen1995" target="_blank">Prepared By <span className="text-green-400">Glen Thomas</span></Link>
                </small>
            </div>
        </footer>
    );
};

export default Footer;