// src/components/Layout.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BioCard = () => {
    return (
        <div className="md:flex gap-16">
            <div className="md:basis-7/12">
                <div className="flex flex-col gap-8 text-lg">
                    <h1 className="text-5xl font-bold">
                        Software Developer
                    </h1>
                    <p className="text-md text-zinc-400">
                        I&apos;m John Doe, a passionate software developer specializing in Python/Django. With a knack for problem-solving, I love creating efficient and user-friendly applications, constantly seeking innovative ways to improve myself and the world at large
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://github.com/glen1995" target="_blank">Github</Link>
                        <Link href="https://www.linkedin.com/in/glen-tk/" target="_blank">LinkedIn</Link>
                        <Link href="https://x.com/glenthomas123" target="_blank">Twitter</Link>
                    </div>
                </div>
            </div>
            <div className="xs:hidden md:basis-5/12">
                <Image src="/placeholder.jpg" width={400} height={600} alt="avatar" />
            </div>
        </div>
    );
};

export default BioCard;