"use client"
import classNames from "classnames";
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";

export default function SectionAbout({
    className
}:{
    className?:string;
}){   
    return (
        <>
            <section className="w-full max-w-[100vw] min-h-[100vh] bg-white transition-opacity ease-in duration-700 opacity-100 relative flex items-center py-4 md:py-16">
                <div className="container relative z-20">
                    <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 items-center">
                        <div className="col-span-12 md:col-span-5 relative flex flex-col -mb-10 md:mb-0">
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
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12">
                                        <h2 className="text-violet-500 font-extrabold uppercase text-2xl">Brandon Hollenbeck</h2>
                                        <h3 className="text-zinc-700 font-extrabold uppercase text-4xl md:text-[90px] leading-[50px] md:leading-[74px]">What<br /> I am</h3>
                                    </div>
                                    <div className="col-start-1 col-span-11">
                                        <h4 className="text-zinc-500 font-extrabold uppercase text-xl md:text-[30px] md:leading-[28px] pl-5 pt-2">
                                            Creative Web Designer & Developer
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>
                            <div>
                                <div className="-mr-2 md:mr-0">
                                    <div className="mt-6 relative z-10 md:w-full right-0 md:-right-12">
                                        <div className="grid grid-cols-12 gap-x-4">
                                            <div className="col-start-2 col-span-9 md:col-start-1 md:col-span-12 border border-zinc-100 bg-white/50 backdrop-blur-sm px-8 md:px-12 py-8 md:py-10 h-full w-full flex flex-col justify-start items-center">
                                                <div className="amp-text-content text-zinc-800 text-sm md:text-[18px] md:leading-[30px]">
                                                    <p>Brandon Hollenbeck is a web designer/developer with over 20 years of experience, 
                                                        proudly creating websites in the Portland, Oregon metro area. He is dedicated to crafting 
                                                        visually stunning and highly functional websites and web apps.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-3 relative h-full mt-16">
                            <div className="relative w-full h-full max-h-[330px] md:max-h-[600px]">
                                <Image
                                    alt="Web Development"
                                    src="/images/about-01.webp"
                                    quality={75}
                                    fill
                                    priority
                                    sizes="2000"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center', 
                                    }} className="bg-top"
                                    />
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 relative h-full flex flex-col">
                            <div className="relative w-full h-full min-h-[300px] md:min-h-[500px]">
                                <Image
                                    alt="Review Website"
                                    src="/images/about-02.webp"
                                    quality={75}
                                    fill
                                    priority
                                    sizes="2000"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center', 
                                    }}
                                    />
                            </div>
                            <div>
                                <div className="-ml-2 md:ml-0">
                                    <div className="mt-6 relative z-10 -left-[100%] md:-left-12 -top-12 w-[200%] md:w-full">
                                        <div className="grid grid-cols-12 gap-x-4">
                                            <div className="col-start-3 col-span-9 md:col-start-1 md:col-span-12 border border-zinc-100 bg-white/50 backdrop-blur-sm px-8 md:px-12 py-8 md:py-10 h-full w-full flex flex-col justify-start items-center">
                                                <div className="amp-text-content text-zinc-800 text-sm md:text-[18px] md:leading-[30px]">
                                                    <p>Combining creativity with the latest coding languaes to bring digital visions to life, ensuring your online 
                                                        presence stands out in a competitive market.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute z-10 bottom-0 right-0 md:-right-[40px] bg-violet-500 rounded-full -rotate-12 outline outline-offset-4 outline-4 outline-violet-500 h-28 w-28 md:h-40 md:w-40">
                                        <Link className="text-center h-28 w-28 md:h-40 md:w-40 flex flex-col gap-2 items-center justify-center pb-5 md:pb-8" href="/#about">
                                            <span className="rotate-45">
                                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 95.91" className="h-10 w-10 md:h-16 md:w-16 fill-white">
                                                    <path d="M259.88 468.09l-52 45.93-5.1-5.52 43.33-38.41H131.88v-8h114.21l-43.25-38.36 5-5.62 52.06 46z" transform="translate(-131.88 -418.11)"></path>
                                                </svg>
                                            </span>
                                            <span className="text-sm md:text-xl text-white uppercase">Read more</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    alt="Banner image"
                    src="/images/amp-about-bg.webp"
                    quality={75}
                    fill
                    priority
                    sizes="2000"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center', 
                    }} className="bg-top"
                    />
                <div className="absolute z-10 inset-0 bg-gradient-to-t from-white/80 from-25% to-white/90"></div>
            </section>
        </>

    )
  }