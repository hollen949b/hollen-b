"use client"
import classNames from "classnames";
import Image from "next/image";

export default function SectionTestimonials({
    className,
}:{
    className?:string;
}){   

    return (
        <>
            <section className="w-full max-w-[100vw] min-h-[100vh] bg-white transition-opacity ease-in duration-700 opacity-100 relative flex items-center py-40">
                <div className="container relative z-20">
                    <div>Testimonials</div>
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