"use client"
import classNames from "classnames";
import { motion } from "framer-motion"
import Image from "next/image";

export default function SectionRecentActivity({
    className
}:{
    className?:string;
}){   
    return (
        <>
            <section className="w-full max-w-[100vw] min-h-[100vh] bg-white transition-opacity ease-in duration-700 opacity-100 relative flex items-center py-4 md:py-16">
                <div className="container relative z-20">
                    <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 items-center">
                        <div className="col-span-12 md:col-span-7 relative h-full order-2 md:order-1">
                            {/* Masonry Grid Layout */}
                            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                                {/* Activity Item 1 */}
                                <div className="break-inside-avoid relative group">
                                    <div className="relative h-64 overflow-hidden rounded-lg">
                                        <Image
                                            alt="AI Development Project"
                                            src="/images/amp-about-01.webp"
                                            quality={75}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center', 
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-center text-white p-4">
                                                <h4 className="text-lg font-bold mb-2">AI Development</h4>
                                                <p className="text-sm">Exploring machine learning and AI integration in web applications</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Activity Item 2 */}
                                <div className="break-inside-avoid relative group">
                                    <div className="relative h-80 overflow-hidden rounded-lg">
                                        <Image
                                            alt="Creative Coding"
                                            src="/images/amp-about-02.webp"
                                            quality={75}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center', 
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-center text-white p-4">
                                                <h4 className="text-lg font-bold mb-2">Creative Coding</h4>
                                                <p className="text-sm">Building interactive art and generative design projects</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Activity Item 3 */}
                                <div className="break-inside-avoid relative group">
                                    <div className="relative h-72 overflow-hidden rounded-lg">
                                        <Image
                                            alt="Open Source Contribution"
                                            src="/images/web-design-and-development-services-01.webp"
                                            quality={75}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center', 
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-center text-white p-4">
                                                <h4 className="text-lg font-bold mb-2">Open Source</h4>
                                                <p className="text-sm">Contributing to community projects and building developer tools</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Activity Item 4 */}
                                <div className="break-inside-avoid relative group">
                                    <div className="relative h-56 overflow-hidden rounded-lg">
                                        <Image
                                            alt="Design System"
                                            src="/images/web-design-and-development-services-02.webp"
                                            quality={75}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center', 
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-center text-white p-4">
                                                <h4 className="text-lg font-bold mb-2">Design System</h4>
                                                <p className="text-sm">Creating reusable component libraries and design patterns</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Activity Item 5 */}
                                <div className="break-inside-avoid relative group">
                                    <div className="relative h-64 overflow-hidden rounded-lg">
                                        <Image
                                            alt="Performance Optimization"
                                            src="/images/amp-about-01.webp"
                                            quality={75}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center', 
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-center text-white p-4">
                                                <h4 className="text-lg font-bold mb-2">Performance</h4>
                                                <p className="text-sm">Optimizing web applications for speed and efficiency</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Activity Item 6 */}
                                <div className="break-inside-avoid relative group">
                                    <div className="relative h-80 overflow-hidden rounded-lg">
                                        <Image
                                            alt="Learning New Technologies"
                                            src="/images/amp-about-02.webp"
                                            quality={75}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center', 
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-center text-white p-4">
                                                <h4 className="text-lg font-bold mb-2">Learning</h4>
                                                <p className="text-sm">Exploring new frameworks and staying current with web technologies</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5 relative flex flex-col -mb-10 md:mb-0 order-1 md:order-2">
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
                                        <h2 className="text-violet-500 font-extrabold uppercase text-2xl">Recent Activities</h2>
                                        <h3 className="text-zinc-700 font-extrabold uppercase text-4xl md:text-[90px] leading-[50px] md:leading-[74px]">What<br /> I'm Up To</h3>
                                    </div>
                                    <div className="col-start-1 col-span-11">
                                        <h4 className="text-zinc-500 font-extrabold uppercase text-xl md:text-[30px] md:leading-[28px] pl-5 pt-2">
                                            Current Projects & Interests
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
                                                    <p>Stay updated with my latest projects, side ventures, and current interests. 
                                                        From web development experiments to creative coding projects, here's what I'm 
                                                        currently working on and exploring.</p>
                                                </div>
                                            </div>
                                        </div>
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
