"use client"
import { useEffect, useState } from 'react'
import Link from "next/link"
import classNames from 'classnames'
import { Sticky } from '@/components/sticky'
import { usePathname } from 'next/navigation'
import { motion, useScroll } from "framer-motion"

import Image from 'next/image'
import { ButtonLink } from '@/components/button'
import { ChevronDown, Instagram, Linkedin } from 'lucide-react'
import { IconCircle } from '@/components/Icon'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Navigation0001({
    className
}:{
    className?:string;
}){
    const [isOpen, setIsOpen] = useState(false)
    const { scrollYProgress } = useScroll();
    const pathname = usePathname()

    useEffect(() => {
        const bodyElement = document.body;
        if(isOpen){
            bodyElement.classList.add('overflow-hidden')
        } else {
            bodyElement.classList.remove('overflow-hidden')
        }
    },[isOpen])

    return(
        <>
            <header className='z-50 absolute top-0 left-0 right-0 w-full'>
                <div className={classNames(
                    isOpen ? "fixed inset-0 h-screen w-screen bg-zinc-900/60 backdrop-blur-md z-50 flex flex-col":"static h-20 w-full",
                )} aria-hidden="false"> 
                    <Sticky className='text-zinc-800 [&>div]:rounded-[70px] [&>div]:backdrop-blur-sm py-0 h-16 md:h-[100px] container mt-9'
                        stickyClass={{
                            on :'[&>div]:bg-zinc-800/80', 
                            off:'[&>div]:bg-zinc-800/50'
                        }}>
                        <div className='flex flex-col w-full h-full transition-all duration-500 overflow-hidden'>
                            <div className="w-full h-full px-8 flex justify-between items-center">
                                <div className="flex-none w-3/4 md:w-1/5 h-20 flex items-center">
                                    <Link href="/" title='Home'>
                                    <Image 
                                            className={ classNames(
                                                className,
                                                'max-h-12 h-full w-full'
                                            ) }
                                            priority
                                            src='/images/hollen-b-logo.png'
                                            width={200}
                                            height={56}
                                            alt='Logo'
                                            />
                                    </Link>
                                </div>
                                <NavigationMenu.Root className="relative z-[1] hidden md:flex flex-grow h-full justify-center">
                                    <NavigationMenu.List className="center m-0 flex list-none text-white h-full">
                                        <NavigationMenu.Item className='h-full'>      
                                            <NavigationMenu.Link title="Home" href='/#about' className={classNames(
                                                'text-white w-full hover:bg-zinc-800 h-full flex flex-col',
                                                    'before:h-[2px] before:bg-violet-500 before:mb-auto',
                                                    'after:h-[2px] after:bg-violet-500 after:mt-auto'
                                                )}>
                                                <span className='px-5'>About</span>
                                            </NavigationMenu.Link>
                                        </NavigationMenu.Item>
                                        <NavigationMenu.Item className='h-full'>      
                                            <NavigationMenu.Link title="Home" href='/#services' className='text-white w-full hover:bg-zinc-800 px-5 py-3 h-full flex items-center'>
                                                <span>Services</span>
                                            </NavigationMenu.Link>
                                        </NavigationMenu.Item>
                                        <NavigationMenu.Item className='h-full'>      
                                            <NavigationMenu.Link title="Web Team" href='/web-team' className='text-white w-full hover:bg-zinc-800 px-5 py-3 h-full flex items-center'>
                                                <span>Web Team</span>
                                            </NavigationMenu.Link>
                                        </NavigationMenu.Item>
                                        <NavigationMenu.Item className='h-full'>      
                                            <NavigationMenu.Link title="Projects" href='/#projects' className='text-white w-full hover:bg-zinc-800 px-5 py-3 h-full flex items-center'>
                                                <span>Projects</span>
                                            </NavigationMenu.Link>
                                        </NavigationMenu.Item>
                                        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                                            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-zinc-800" />
                                        </NavigationMenu.Indicator>
                                    </NavigationMenu.List>
                                    <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
                                        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-zinc-800 transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                                    </div>
                                </NavigationMenu.Root>
                                <div className="w-1/4 md:w-1/5 flex justify-end">
                                    <div className='hidden md:flex'>
                                        <ButtonLink color='primary' href="/#contact" label="Contact" />
                                    </div>
                                    <div className='flex md:hidden -mr-[22px] md:-mr-8'>
                                        <button
                                            title="Navigation"
                                            onClick={() => setIsOpen((open:boolean) => !isOpen)}
                                            className= { classNames(
                                                isOpen ? "active text-white bg-violet-500":"text-zinc-100",
                                                "  rounded-full inline-flex items-center justify-center h-12 w-12 md:h-20 md:w-16 focus:outline-none transition duration-150 ease-in-out"
                                            )} >
                                            <svg
                                                className="h-8 w-8 md:h-16 md:w-16 transition-transform duration-150 ease-in-out ham"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 100 100">
                                                <path className="line top"
                                                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                                                <path className="line middle"
                                                    d="m 30,50 h 40" />
                                                <path className="line bottom"
                                                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <motion.div style={{ scaleX: scrollYProgress, transformOrigin:'0%' }} className='relative bottom-0 left-0 right-0 h-0.5 bg-violet-500 transition-transform ease' />
                        </div>
                    </Sticky>
                    <div className={classNames(
                        isOpen ? "flex h-full":"hidden h-0",
                        "text-zinc-50"
                    )}>
                        <div className='container py-4'>
                            <div className='bg-zinc-800/80 rounded-[32px] min-h-96 h-full flex flex-col p-3'>
                                <ul className='flex flex-col space-y-0.5 w-full h-full overflow-hidden rounded-3xl'>
                                    <li className='w-full'>
                                        <Link href='/' onClick={() => setIsOpen((open:boolean) => !isOpen)} className='px-4 py-4 block border-solid border-b border-zinc-700/80 text-white'>Home</Link>
                                    </li>
                                    <li className='w-full'>
                                        <Link href='/#about' onClick={() => setIsOpen((open:boolean) => !isOpen)} className='px-4 py-4 block border-solid border-b border-zinc-700/80 text-white'>About</Link>
                                    </li>
                                    <li className='w-full'>
                                        <Link href='/#services' onClick={() => setIsOpen((open:boolean) => !isOpen)} className='px-4 py-4 block border-solid border-b border-zinc-700/80 text-white'>Services</Link>
                                    </li>
                                    <li className='w-full'>
                                        <Link href='/#projects' onClick={() => setIsOpen((open:boolean) => !isOpen)} className='px-4 py-4 block border-solid border-b border-zinc-700/80 text-white'>Projects</Link>
                                    </li>
                                </ul>
                                <ul className='flex flex-col space-y-2 w-full p-4'>
                                    <li>
                                        <ButtonLink onClick={() => setIsOpen((open:boolean) => !isOpen)}  color='primary' href="/#contact" label="Contact" full />
                                    </li>
                                    <li className='text-center'>- or -</li>
                                    <li>
                                        <ButtonLink onClick={() => setIsOpen((open:boolean) => !isOpen)}  color='primary' href="/tel:888-475-7532" label="Call: (888) 475-7532" full />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}