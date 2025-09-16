"use client"
import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion"

export default function SectionTools({
    className,
}:{
    className?:string;
}){   

    return (
        <>
            <section className="w-full max-w-[100vw] bg-white transition-opacity ease-in duration-700 opacity-100 relative flex items-center py-16">
                <div className="container relative z-20">
                    <div className="grid grid-cols-12 gap-x-6 items-center">
                        <div className=" col-start-6 col-span-6 md:col-start-10 md:col-span-2 relative">
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
                                <div className="text-white font-extrabold uppercase md:text-[90px] md:leading-[74px] relative">
                                    <div className="h-full bg-violet-500 absolute top-0 bottom-0 -left-6 w-2" />
                                    <h3 className="uppercase text-violet-500 text-lg text-nowrap">Tools Used</h3>
                                    <h2 className="text-4xl leading-[50px] text-zinc-700 font-extrabold uppercase md:text-[90px] md:leading-[74px]">Tools<br />Used</h2>
                                </div>
                            </motion.div>
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