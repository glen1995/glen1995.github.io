const aboutDescription = () => (
    <section className="flex flex-col gap-y-16 basis-1/2 sm:order-2 md:order-1">
        <div className="flex flex-col gap-8">
            <h2 className="text-5xl font-bold">I&apos;m Glen Thomas. I live in Vancouver, BC</h2>
            <div className="flex flex-col gap-y-12 text-zinc-400 leading-relaxed">
                <p>I find joy in sharing my knowledge and insights through carefully crafted articles. Some of my content has been featured in popular blogs and newsletters.</p>
                <p>
                    I&apos;m also a firm believer in the power of community and collaboration. You might spot me at local tech meetups, eagerly engaging in discussions and exchanging ideas with fellow developers. I thrive on the energy of these interactions and value the connections formed within our vibrant tech ecosystem.
                </p>
                <p>
                    In my spare time, when I&apos;m not knee-deep in code or sharing my knowledge, you&apos;ll find me indulging in a variety of creative pursuits. Whether it&apos;s strumming on my trusty guitar, experimenting with watercolors, or getting lost in a captivating book, I believe in nurturing a well-rounded life outside of the digital realm.
                </p>
                <p>If you ever spot me in the wild, don&apos;t hesitate to say hello! Let&apos;s grab a cup of coffee and geek out over the latest advancements in front-end development or discuss our favorite obscure programming languages.</p>
            </div>
        </div>
        <section>
            <h2 className="font-semibold text-4xl mb-4">Expertise</h2>
            <p>I&apos;ve spent few years working on my skills. In no particular order, here are a few of them.</p>
            <ul className="flex flex-wrap items-center gap-3 mt-8">
                <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Javascript</li>
                <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Python</li>
                <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Typescript</li>
                <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">C++</li>
                <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Next.js</li>
                <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Tailwind CSS</li>
            </ul>

        </section>
    </section>
);

export default aboutDescription;