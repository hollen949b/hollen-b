"use client"
import { useRef } from "react";
import classNames from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Container = ({ 
    className, 
    children, 
    image,
    objectPosition 
}: { 
    className?:string; 
    children?: React.ReactNode; 
    image:string; 
    objectPosition?:string;
}) => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: scrollRef,
      offset: ["start end", "end start"]
    });
    const translateY = useTransform(
      scrollYProgress,
      // Map x from these values:
      [0, 1],
      // Into these values:
      ["-30%", "30%"]
    );

    return(
    <div className={classNames(
            className,
            "relative overflow-hidden w-full h-full"
        )}>
        <div className="relative z-10">{children}</div>
        <motion.div ref={scrollRef} className={'absolute inset-0 -top-[15%] bg-center h-[160%] w-full z-0'}
            style={{
                // backgroundSize:'130%',
                translateY: translateY
            }}>
            { image &&
            <Image
                alt="Banner image"
                src={image}
                quality={75}
                priority={false}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    objectPosition: objectPosition ? objectPosition:'right top',
                }} className="bg-top"
                />
            }
        </motion.div>
    </div>
)};

export const Parallax = {
    background: (props: { children?: React.ReactNode; image:string; className?:string; }) => Container(props)
};