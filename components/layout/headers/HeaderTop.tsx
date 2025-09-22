"use client"
import { motion, useWillChange } from "framer-motion"
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function HeaderTop({
    className
}:{
    className?:string;
}){   
    return (
        <>
            <header className="w-full max-w-[100vw] min-h-[100vh] bg-zinc-500 transition-opacity ease-in duration-700 opacity-100 relative">
                <div className="container relative z-20 h-screen flex flex-col items-center pt-40">
                    <div className="grid grid-cols-12 grid-rows-3 md:grid-rows-4 gap-x-2 gap-y-2 md:gap-x-8 md:gap-y-8 items-center my-auto w-full">
                        <div className="lg:col-span-1 relative h-full">
                            <div className="absolute -top-2 md:-top-6 -left-0 w-0">
                                <ul className="relative -rotate-90 flex justify-end flex-nowrap w-0 pt-4 ">
                                    <li className="inline-block m-0">
                                        <a className="text-xl text-white capitalize block pr-[50px] relative after:content-[''] after:absolute after:w-[30px] after:right-[10px] after:top-2/4 after:translate-y-[50%] after:bg-white after:h-[1px] group-hover:text-violet-500" href="#">Facebook</a>
                                    </li>
                                    <li className="inline-block m-0">
                                        <a className="text-xl text-white capitalize block pr-[50px] relative after:content-[''] after:absolute after:w-[30px] after:right-[10px] after:top-2/4 after:translate-y-[50%] after:bg-white after:h-[1px] group-hover:text-violet-500" href="#">LinkedIn</a>
                                    </li>
                                    <li className="inline-block m-0"> 
                                        <a className="text-xl text-white capitalize block pr-[50px] relative after:content-[''] after:absolute after:w-[30px] after:right-[10px] after:top-2/4 after:translate-y-[50%] after:bg-white after:h-[1px] group-hover:text-violet-500" href="#">GitHub</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative col-start-3 col-span-11 row-span-1 md:row-span-2">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} 
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className={
                                    classNames(
                                        "w-full relative z-20",
                                        className
                                    )
                                }>
                                <div className="text-white font-black uppercase text-[45px] leading-[44px] md:text-[7.2vw] md:leading-[6vw]">
                                    <h1>Brandon<br />Hollenbeck</h1>
                                </div>
                            </motion.div>
                            <div className="absolute -top-[8vw] right-0">
                                <Image
                                    alt="Banner image"
                                    src="/images/hollen-cat-01.webp"
                                    quality={75}
                                    width={600}
                                    height={600}
                                    priority
                                    sizes="2000"
                                    className="w-[30vw]"
                                    />
                            </div>
                        </div>

                        <div className="col-start-3 col-span-11">
                            <div className="max-w-[900px]">
                                <div className="text-white font-extrabold uppercase text-xl md:text-[30px] md:leading-[30px] whitespace-normal xl:whitespace-nowrap">
                                    <h2>A web designer/developer from the Portland metro area</h2>
                                </div>
                                <div className="text-white text-base md:text-[18px] md:leading-[30px]">
                                    <p>Elevate your online presence with cutting-edge web design solutions, expertly created by Brandon Hollenbeck a creative web designer and developer.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-start-3 col-span-1 relative">
                            <div className="absolute -top-[32px] left-2 bg-violet-500 rounded-full rotate-12 outline outline-offset-4 outline-4 outline-violet-500">
                                <Link className="text-center h-28 w-28 md:h-40 md:w-40 flex flex-col gap-2 items-center justify-center pb-5 md:pb-8" href="/#about">
                                    <span className="rotate-90">
                                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 95.91" className="h-10 w-10 md:h-16 md:w-16 fill-white">
                                            <path d="M259.88 468.09l-52 45.93-5.1-5.52 43.33-38.41H131.88v-8h114.21l-43.25-38.36 5-5.62 52.06 46z" transform="translate(-131.88 -418.11)"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm md:text-xl text-white uppercase">learn more</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full text-right py-4">
                        <Link className='text-base md:text-[22px] text-white capitalize block font-extralight' href={`tel:555.555.5555`}>
                            Call: (503) 504-4810
                        </Link>
                    </div>
                </div>
                <div className="absolute left-0 bottom-0 z-20">
                    <Image
                        alt="Banner image"
                        src="/images/paint-splash-01.webp"
                        quality={75}
                        priority
                        width={800}
                        height={622}
                        sizes="2000"
                        className="w-[30vw]"
                        />
                </div>
                <Image
                    alt="Banner image"
                    src="/images/space-01.webp"
                    quality={75}
                    fill
                    priority
                    sizes="2000"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center', 
                    }} className="h-full w-full"
                    />

                <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/80 from-25% to-black/70"></div>
            </header>
        </>
    )
}