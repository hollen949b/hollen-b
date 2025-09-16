"use client"
import Link from "next/link";
import {useEffect, useState} from "react"
import { ArrowUpToLine } from "lucide-react";

const ScrollToTop = ({
    href,
}:{
    href:string
}) => {    
    const [showScrollToTop, setShowScrollToTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY; 
            if(currentScrollPos >= 100) {
                setShowScrollToTop(true)
            } else {
                setShowScrollToTop(false)
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className={`fixed right-4 z-[9999] transition-all duration-500 ${(showScrollToTop)? 'opacity-100 bottom-8':' -bottom-10 opacity-0'}`}>
            <Link href={href} className={`text-zinc-800 bg-white/40 block rounded-sm p-2`} scroll={false} title="Back to top of page">
                <ArrowUpToLine />
            </Link>
        </div>
    )
}

export default ScrollToTop