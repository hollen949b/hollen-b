"use client"
import classNames from "classnames";
import { Parallax } from "@/components/parallax";
import { motion } from "framer-motion"
import { ButtonLink } from "@/components/button";
import Link from "next/link";

export default function HeaderBottom({
    className,
}:{
    className?:string;
}){   
    return (
        <>
            <div className="w-full min-h-[400px] max-w-[100vw]">
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className={classNames(
                    className,
                    'relative'
                )}>
                    <div className="absolute z-10 inset-0 bg-gradient-to-b from-black/90 from-25% to-black/40"></div>
                    <Parallax.background image="" className="bg-[#0D0D0D]">
                        <div className="container py-8 md:py-12 lg:py-16 min-h-[400px] w-full flex flex-col justify-center items-center">
                            <motion.div
                                initial={{ x:'-25%' }}
                                whileInView={{ x:0 }} 
                                transition={{ duration: 0.9 }}
                                viewport={{ once: true }}
                                className="flex flex-col justify-center space-y-6"
                            >
                                <div>
                                    <h2 className="text-4xl md:text-6xl leading-[64px] md:leading-[100px] font-extrabold uppercase text-primary-400 text-white text-center">Some Header</h2>
                                    <div className="text-white text-base text-center">Some Content</div>
                                </div>
                                <div className="flex justify-center">
                                    <ButtonLink href="#" color='primary' label="Button" />
                                </div>
                            </motion.div>
                        </div>
                    </Parallax.background>
                </motion.section>
            </div>
        </>
    )
  }