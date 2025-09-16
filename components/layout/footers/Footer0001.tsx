"use client"
import classNames from "classnames";
import Link from "next/link";

export default function Footer0001({
    className
}:{
    className?:string;
}){   
    const d = new Date();
    let year = d.getFullYear();
    return(
        <footer className={classNames(
            "bg-zinc-950 flex flex-col gap-3 py-8",
            className
            )}>
            <ul className='flex flex-col md:flex-row container justify-center items-center text-sm text-white text-center gap-2 md:gap-0 md:divide-x-2 divide-solid divide-white'>
                
                <li className=''>
                    <Link href="/" className='text-white hover:text-zinc-100 px-2'>Home</Link>
                    <Link href="/#about" className='text-white hover:text-zinc-100 px-2'>About</Link>
                    <Link href="/#services" className='text-white hover:text-zinc-100 px-2'>Services</Link>
                    <Link href="/web-team" className='text-white hover:text-zinc-100 px-2'>Web Team</Link>
                    <Link href="/#projects" className='text-white hover:text-zinc-100 px-2'>Projects</Link>
                </li>
            </ul>
            <ul className="flex flex-col md:flex-row container justify-center items-center text-sm text-white text-center gap-2 md:gap-0 md:divide-x-2 divide-solid divide-white">
                <li className="px-2">Copyright &copy; {year} Advantage Media Partners</li>
            </ul>
        </footer>
    )
  }