"use client"
import classNames from "classnames";
import { motion } from "framer-motion"
import Image from "next/image";

export default function SectionWebTeamAbout({
    className
}:{
    className?:string;
}){   
    return (
        <>
            <section className="w-full max-w-[100vw] min-h-[100vh] bg-white transition-opacity ease-in duration-700 opacity-100 relative flex items-center py-40">
                <div className="container relative z-20">
                    <div className="grid grid-cols-12 gap-x-6 items-center">
                        <div className="col-span-5">
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
                                <div className="text-white font-extrabold uppercase md:text-[90px] md:leading-[74px] relative pr-40">
                                    <div className="h-full bg-violet-500 absolute top-0 bottom-0 -left-6 w-2" />
                                    <h3 className="uppercase text-violet-500 text-lg">About</h3>
                                    <h2 className="text-4xl leading-[50px] text-zinc-700 font-extrabold uppercase md:text-[90px] md:leading-[74px]">Some<br /> Big<br />Ass<br /> Title</h2>
                                </div>
                            </motion.div>
                            <div className="text-zinc-800 text-2xl sm:text-[18px] sm:leading-[30px] pt-8">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna are iqua. Ut enim ad minim veniam, quis nostrud exercitation is laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="col-span-3 relative h-full mt-16">
                            <Image
                                alt="Web Development"
                                src="/images/amp-about-01.webp"
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
                        <div className="col-span-4 relative h-full">
                            <Image
                                alt="Review Website"
                                src="/images/amp-about-02.webp"
                                quality={75}
                                fill
                                priority
                                sizes="2000"
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center', 
                                }} className="bg-top"
                                />

                            <div className="absolute -bottom-16 -right-[40px] z-10">
                                <div className="bg-violet-500 rounded-full h-40 w-40 outline outline-offset-4 outline-4 outline-violet-500 mr-auto rotate-45">
                                    <a className="text-center h-40 w-40 flex flex-col gap-2 items-center justify-center pb-8" href="#">
                                        <span className="rotate-90">
                                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 95.91" className="h-16 w-16 fill-white">
                                                <path d="M259.88 468.09l-52 45.93-5.1-5.52 43.33-38.41H131.88v-8h114.21l-43.25-38.36 5-5.62 52.06 46z" transform="translate(-131.88 -418.11)"></path>
                                            </svg>
                                        </span>
                                        <span className="text-xl text-white uppercase">The Team</span>
                                    </a>
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