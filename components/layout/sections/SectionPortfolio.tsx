"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/carousel";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SectionPortfolio({
    className,
}:{
    className?:string;
}){   

    return (
        <>
            <section className="w-full max-w-[100vw] min-h-[100vh] bg-black transition-opacity ease-in duration-700 opacity-100 relative flex items-center py-40">
                <div className="container relative z-20">
                    <div className="grid grid-cols-12 gap-x-6 items-center pb-8">
                        <div className="col-span-5 relative">
                            <div className="absolute -bottom-24 -right-[50px] z-10">
                                <div className="bg-violet-500 rounded-full h-40 w-40 outline outline-offset-4 outline-4 outline-violet-500 mr-auto -rotate-45">
                                    <a className="text-center h-40 w-40 flex flex-col gap-2 items-center justify-center pb-8" href="#">
                                        <span className="rotate-90">
                                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 95.91" className="h-16 w-16 fill-white">
                                                <path d="M259.88 468.09l-52 45.93-5.1-5.52 43.33-38.41H131.88v-8h114.21l-43.25-38.36 5-5.62 52.06 46z" transform="translate(-131.88 -418.11)"></path>
                                            </svg>
                                        </span>
                                        <span className="text-xl text-white uppercase">View More</span>
                                    </a>
                                </div>
                            </div>
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
                                    <h3 className="uppercase text-violet-500 text-lg">Projects</h3>
                                    <h2 className="text-4xl leading-[50px] text-zinc-200 font-extrabold uppercase md:text-[90px] md:leading-[74px]">Creative<br />Website <br />Design</h2>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-start-7 col-span-5 relative h-full flex items-end">
                            <div className="text-zinc-50 text-2xl sm:text-[18px] sm:leading-[30px]">
                                <p>Taking care of every detail of your project&#39;s development, Brandon wil
                                    guide you through the entire process from the initial concept to the successful launch of your online presence. 
                                    We bring your vision to life with a seamless approach, ensuring your website not only stands out but also delivers 
                                    exceptional results.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pb-8 pt-16">
                        <h3 className="text-2xl md:text-4xl md:leading-[50px] uppercase font-extrabold text-zinc-50">Featured Projects</h3>
                    </div>
                        
                    <div className="px-8 md:px-0">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full"
                            >
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="col-span-4 bg-zinc-950">
                                        <div className="relative h-full pt-[60%]">
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
                                        <div className="p-5 text-zinc-100">
                                            <h3 className="text-xl uppercase font-extrabold">Demo 001</h3>
                                            <hr className="border border-zinc-800 my-4" />
                                            <p>Demo 001 content</p>
                                            <div className="flex justify-between text-zinc-400 font-extrabold pt-6">
                                                <div><Link href={'#'}>View Site</Link></div>
                                                <div><Link href={'#'}>View details</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                   
                </div>
                <Image
                    alt="Banner image"
                    src="/images/amp-projects-bg.webp"
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