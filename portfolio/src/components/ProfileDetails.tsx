import Image from 'next/image';
import Link from 'next/link';

const profileDetails = () => (
    <section className="basis-1/2 flex flex-col items-center sm:order-1 md:order-2">
        <div>
            <div style={{ width: '25rem', height: '25rem', position: 'relative' }}>
                <Image className="rounded-lg" src="/image.jpg" alt="avatar" layout="fill"
                    objectFit="cover" />
            </div>
            <div className="mt-6">
                <Link href="#" className="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium">Download Resumé</Link>
            </div>
            <div className="my-8">
                <Link href="mailto:glenkt2@gmail.com" className="flex items-center gap-x-2 hover:text-purple-400 duration-300">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
                    glenkt2@gmail.com
                </Link>

            </div>
        </div>
    </section>
);

export default profileDetails;