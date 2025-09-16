"use client"
import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function SectionWebTeam({
    className,
}:{
    className?:string;
}){   

    return (
        <>
            <section className="w-full max-w-[100vw] min-h-[100vh] bg-white transition-opacity ease-in duration-700 opacity-100 relative flex items-center py-40">
                <div className="container relative z-20">
                    <div className="pb-4 grid grid-cols-1">
                        <div className="col-span-12 relative">
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
                                <div className="text-white font-extrabold uppercase md:text-[90px] md:leading-[74px] relative text-center">
                                    <h3 className="uppercase text-violet-500 text-lg">Meet The</h3>
                                    <h2 className="text-4xl leading-[50px] text-zinc-200 font-extrabold uppercase md:text-[90px] md:leading-[74px]">Web Team</h2>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-7">
                        <div className=" bg-zinc-950">
                            <div className="overflow-hidden pt-[60%] relative">
                                <Image
                                    alt="Alan profile image"
                                    src={'/images/david-gross-01.webp'}
                                    quality={100}
                                    fill
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'right top', 
                                    }} className="bg-top"
                                    />
                            </div>
                            <div className="p-5 text-zinc-100">
                                <h3 className="text-xl uppercase font-extrabold">David Gross</h3>
                                <h4 className="text-sm">Founder and CEO</h4>
                                <hr className="border border-zinc-800 my-4" />
                                <div className="overflow-hidden max-h-24 relative">
                                    <div className="absolute z-10 bottom-0 w-full bg-gradient-to-b from-zinc-950/0 to-zinc-950/90 h-14"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus libero sit amet nibh tempor fringilla. 
                                        Proin sed fringilla dui. Duis sit amet felis quis dui luctus imperdiet sit amet in nisi. Nulla facilisi. Aenean 
                                        molestie at arcu nec tempus. Quisque sed felis quis orci ornare aliquam. Donec lobortis ligula sit amet dui 
                                        lacinia, vel interdum metus posuere.</p>
                                </div>
                                <div className="flex justify-between text-zinc-400 font-extrabold pt-6">
                                    <div className="flex flex-nowrap gap-3">
                                        <div><Link href={'#'}><Phone /></Link></div>
                                        <div><Link href={'#'}><Mail /></Link></div>
                                        <div><Link href={'#'}><Linkedin /></Link></div>
                                    </div>
                                    <div>Read More</div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-zinc-950">
                            <div className="overflow-hidden pt-[60%] relative">
                                <Image
                                    alt="Alan profile image"
                                    src={'/images/alan-01.webp'}
                                    quality={100}
                                    fill
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'right top', 
                                    }} className="bg-top"
                                    />
                            </div>
                            <div className="p-5 text-zinc-100">
                                <h3 className="text-xl uppercase font-extrabold">Brandon Hollenbeck</h3>
                                <h4 className="text-sm">Web Team Manager | Senior Developer</h4>
                                <hr className="border border-zinc-800 my-4" />
                                <div className="overflow-hidden max-h-24 relative">
                                    <div className="absolute z-10 bottom-0 w-full bg-gradient-to-b from-zinc-950/0 to-zinc-950/90 h-14"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus libero sit amet nibh tempor fringilla. 
                                        Proin sed fringilla dui. Duis sit amet felis quis dui luctus imperdiet sit amet in nisi. Nulla facilisi. Aenean 
                                        molestie at arcu nec tempus. Quisque sed felis quis orci ornare aliquam. Donec lobortis ligula sit amet dui 
                                        lacinia, vel interdum metus posuere.</p>
                                </div>
                                <div className="flex justify-between text-zinc-400 font-extrabold pt-6">
                                    <div className="flex flex-nowrap gap-3">
                                        <div><Link href={'#'}><Phone /></Link></div>
                                        <div><Link href={'#'}><Mail /></Link></div>
                                        <div><Link href={'#'}><Linkedin /></Link></div>
                                    </div>
                                    <div>Read More</div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-zinc-950">
                            <div className="overflow-hidden pt-[60%] relative">
                                <Image
                                    alt="Alan profile image"
                                    src={'/images/alan-01.webp'}
                                    quality={100}
                                    fill
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'right top', 
                                    }} className="bg-top"
                                    />
                            </div>
                            <div className="p-5 text-zinc-100">
                                <h3 className="text-xl uppercase font-extrabold">Jeremy Madarang</h3>
                                <h4 className="text-sm">Web Project Coordinator | Account Manager</h4>
                                <hr className="border border-zinc-800 my-4" />
                                <div className="overflow-hidden max-h-24 relative">
                                    <div className="absolute z-10 bottom-0 w-full bg-gradient-to-b from-zinc-950/0 to-zinc-950/90 h-14"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus libero sit amet nibh tempor fringilla. 
                                        Proin sed fringilla dui. Duis sit amet felis quis dui luctus imperdiet sit amet in nisi. Nulla facilisi. Aenean 
                                        molestie at arcu nec tempus. Quisque sed felis quis orci ornare aliquam. Donec lobortis ligula sit amet dui 
                                        lacinia, vel interdum metus posuere.</p>
                                </div>
                                <div className="flex justify-between text-zinc-400 font-extrabold pt-6">
                                    <div className="flex flex-nowrap gap-3">
                                        <div><Link href={'#'}><Phone /></Link></div>
                                        <div><Link href={'#'}><Mail /></Link></div>
                                        <div><Link href={'#'}><Linkedin /></Link></div>
                                    </div>
                                    <div>Read More</div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-zinc-950">
                            <div className="overflow-hidden pt-[60%] relative">
                                <Image
                                    alt="Alan profile image"
                                    src={'/images/alan-01.webp'}
                                    quality={100}
                                    fill
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'right top', 
                                    }} className="bg-top"
                                    />
                            </div>
                            <div className="p-5 text-zinc-100">
                                <h3 className="text-xl uppercase font-extrabold">Nicholas Cassady</h3>
                                <h4 className="text-sm">Senior Graphic/Web Designer</h4>
                                <hr className="border border-zinc-800 my-4" />
                                <div className="overflow-hidden max-h-24 relative">
                                    <div className="absolute z-10 bottom-0 w-full bg-gradient-to-b from-zinc-950/0 to-zinc-950/90 h-14"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus libero sit amet nibh tempor fringilla. 
                                        Proin sed fringilla dui. Duis sit amet felis quis dui luctus imperdiet sit amet in nisi. Nulla facilisi. Aenean 
                                        molestie at arcu nec tempus. Quisque sed felis quis orci ornare aliquam. Donec lobortis ligula sit amet dui 
                                        lacinia, vel interdum metus posuere.</p>
                                </div>
                                <div className="flex justify-between text-zinc-400 font-extrabold pt-6">
                                    <div className="flex flex-nowrap gap-3">
                                        <div><Link href={'#'}><Phone /></Link></div>
                                        <div><Link href={'#'}><Mail /></Link></div>
                                        <div><Link href={'#'}><Linkedin /></Link></div>
                                    </div>
                                    <div>Read More</div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-zinc-950">
                            <div className="overflow-hidden pt-[60%] relative">
                                <Image
                                    alt="Alan profile image"
                                    src={'/images/alan-01.webp'}
                                    quality={100}
                                    fill
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'right top', 
                                    }} className="bg-top"
                                    />
                            </div>
                            <div className="p-5 text-zinc-100">
                                <h3 className="text-xl uppercase font-extrabold">Alan Diaz</h3>
                                <h4 className="text-sm">Web Designer and Developer</h4>
                                <hr className="border border-zinc-800 my-4" />
                                <div className="overflow-hidden max-h-24 relative">
                                    <div className="absolute z-10 bottom-0 w-full bg-gradient-to-b from-zinc-950/0 to-zinc-950/90 h-14"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus libero sit amet nibh tempor fringilla. 
                                        Proin sed fringilla dui. Duis sit amet felis quis dui luctus imperdiet sit amet in nisi. Nulla facilisi. Aenean 
                                        molestie at arcu nec tempus. Quisque sed felis quis orci ornare aliquam. Donec lobortis ligula sit amet dui 
                                        lacinia, vel interdum metus posuere.</p>
                                </div>
                                <div className="flex justify-between text-zinc-400 font-extrabold pt-6">
                                    <div className="flex flex-nowrap gap-3">
                                        <div><Link href={'#'}><Phone /></Link></div>
                                        <div><Link href={'#'}><Mail /></Link></div>
                                        <div><Link href={'#'}><Linkedin /></Link></div>
                                    </div>
                                    <div>Read More</div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-zinc-950">
                            <div className="overflow-hidden pt-[60%] relative">
                                <Image
                                    alt="Alan profile image"
                                    src={'/images/alan-01.webp'}
                                    quality={100}
                                    fill
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'right top', 
                                    }} className="bg-top"
                                    />
                            </div>
                            <div className="p-5 text-zinc-100">
                                <h3 className="text-xl uppercase font-extrabold">Evelyn Vernon</h3>
                                <h4 className="text-sm">Web Designer and Developer</h4>
                                <hr className="border border-zinc-800 my-4" />
                                <div className="overflow-hidden max-h-24 relative">
                                    <div className="absolute z-10 bottom-0 w-full bg-gradient-to-b from-zinc-950/0 to-zinc-950/90 h-14"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus libero sit amet nibh tempor fringilla. 
                                        Proin sed fringilla dui. Duis sit amet felis quis dui luctus imperdiet sit amet in nisi. Nulla facilisi. Aenean 
                                        molestie at arcu nec tempus. Quisque sed felis quis orci ornare aliquam. Donec lobortis ligula sit amet dui 
                                        lacinia, vel interdum metus posuere.</p>
                                </div>
                                <div className="flex justify-between text-zinc-400 font-extrabold pt-6">
                                    <div className="flex flex-nowrap gap-3">
                                        <div><Link href={'#'}><Phone /></Link></div>
                                        <div><Link href={'#'}><Mail /></Link></div>
                                        <div><Link href={'#'}><Linkedin /></Link></div>
                                    </div>
                                    <div>Read More</div>
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
                <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/80 from-25% to-black/90"></div>
            </section>
        </>
    )
  }