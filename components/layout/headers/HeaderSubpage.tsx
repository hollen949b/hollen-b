"use client"
import { motion } from "framer-motion"
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
            <header className="w-full max-w-[100vw] bg-zinc-500 transition-opacity ease-in duration-700 opacity-100 relative">
                <div className="container relative z-20 min-h-[50vh] pt-[14vh] flex flex-col">
                    <div className="grid grid-cols-12 w-full mt-auto">
                        <div className="col-span-12">
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
                                <h2 className="style-title my-stroke absolute left-[24%] top-[15%] bottom-0 right-0 uppercase text-transparent text-[440px] -z-[1] md:left-[12%] md:text-[250px] sm:left-[2%] sm:text-[150px]">AMP</h2>
                                <div className="text-white font-extrabold uppercase md:text-[90px] md:leading-[74px]">
                                    <h1>AMP<br />Web Team</h1>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 w-full mb-auto">
                        <div className="col-span-6">
                            <div className="gap-[100px] mt-[100px] ml-[100px] mr-0 mb-0 md:gap-[50px] md:mt-[30px] md:mx-0 md:mb-0 sm:gap-[50px] sm:mt-[30px] sm:mx-0 sm:mb-0 sm:flex-col-reverse">
                                <div className="text-white text-2xl sm:text-[18px] sm:leading-[30px]">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna are iqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    alt="Banner image"
                    src="/images/amp-banner-bg.webp"
                    quality={75}
                    fill
                    priority
                    sizes="2000"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center', 
                    }} className="bg-top"
                    />
                <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/90 from-25% to-black/90"></div>
                <div className="absolute z-20 bottom-0 w-full py-4 px-8 rounded-tl-lg">
                    <div className="container text-right">
                        <Link className='text-[22px] text-white capitalize block font-extralight' href={`tel:555.555.5555`}>
                            Call: (888) 475-7532 #214
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}