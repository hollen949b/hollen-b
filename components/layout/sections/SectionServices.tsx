"use client"
import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion"
import { Code, Cuboid, Paintbrush } from "lucide-react";

export default function SectionServices({
    className,
}:{
    className?:string;
}){   

    return (
        <>
            <section className="w-full max-w-[100vw] min-h-[100vh] bg-white transition-opacity ease-in duration-700 opacity-100 relative flex items-center py-4 md:py-40">
                <div className="container relative z-20">
                    <div className="pb-8 md:pb-16 grid grid-cols-12 gap-x-4 md:gap-x-6 relative w-full">
                        <div className="col-span-6 md:col-span-4 relative">
                            <div className="w-full h-full opacity-25 md:opacity-100">
                                <Image
                                    alt="Web design and development Services"
                                    src="/images/web-design-and-development-services-01.webp"
                                    quality={75}
                                    fill
                                    priority
                                    sizes="800"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center', 
                                    }} className=""
                                    />
                            </div>
                        </div>
                        <div className="col-start-0 md:col-start-7 col-span-6">
                            <div className="-ml-2 md:-ml-3">
                                <div className="relative -left-[100%] w-[200%] grid grid-cols-12 gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-3 pt-16 pb-8">
                                    <div className="col-start-3 md:col-start-5 col-span-10 md:col-span-12 relative">
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
                                                <h3 className="uppercase text-violet-500 text-lg">My Services</h3>
                                                <div className="text-white font-extrabold uppercase text-4xl md:text-[90px] leading-[36px] md:leading-[74px]">
                                                    <h2>Web Design & Development Experience</h2>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                    <div className="col-start-3 md:col-start-5 col-span-5 md:col-span-4 h-full md:min-h-80 relative">
                                        <Image
                                            alt="Web design and development Services"
                                            src="/images/web-design-and-development-services-02.webp"
                                            quality={75}
                                            fill
                                            priority
                                            sizes="800"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center', 
                                            }} className=""
                                            />
                                    </div>
                                    <div className="col-span-5 md:col-span-4">
                                        <div className="text-white text-sm md:text-[18px] md:leading-[30px]">
                                            <p>By learning everything about your business and target audience, Brandon Hollenbeck will use 
                                                expertice in digital services to give you a stronger presence on the web</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="border border-solid border-zinc-500 bg-zinc-800/40 backdrop-blur-sm px-8 py-10 text-white text-sm">
                            <div className="pb-3">
                                <Code size={64} className="text-zinc-200" />
                            </div>
                            <h3 className="block text-xl text-zinc-300">Web Design</h3>
                            <p className="text-zinc-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor orci ut 
                                velit pharetra lacinia. Duis ac mauris mi.</p>
                        </div>
                        <div className="border border-solid border-zinc-500 bg-zinc-800/40 backdrop-blur-sm px-8 py-10 text-white text-sm">
                            <div className="pb-3">
                                <Cuboid size={64} className="text-zinc-200" />
                            </div>
                            <h3 className="block text-xl text-zinc-300">UI/UX Design</h3>
                            <p className="text-zinc-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor orci ut 
                                velit pharetra lacinia. Duis ac mauris mi.</p>
                        </div>
                        <div className="border border-solid border-zinc-500 bg-zinc-800/40 backdrop-blur-sm px-8 py-10 text-white text-sm">
                            <div className="pb-3">
                                <Paintbrush size={64} className="text-zinc-200" />
                            </div>
                            <h3 className="block text-xl text-zinc-300">Graphic Design</h3>
                            <p className="text-zinc-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor orci ut 
                                velit pharetra lacinia. Duis ac mauris mi.</p>
                        </div>
                    </div>
                </div>
                <Image
                    alt="Banner image"
                    src="/images/amp-services-bg.webp"
                    quality={75}
                    fill
                    priority
                    sizes="2000"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center', 
                    }} className="bg-top"
                    />
                <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/80 from-25% to-black/90"></div>
            </section>
        </>
    )
  }