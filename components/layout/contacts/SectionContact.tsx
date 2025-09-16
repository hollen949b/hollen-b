"use client"
import { Button } from "@/components/button";
import classNames from "classnames";
import { Clock, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion"
import Image from "next/image";

export default function SectionContact({
    className
}:{
    className?:string;
}){   
    const [submitting, setSubmittingState] = useState(false)
    const [emailSent, setEmailSent] = useState<boolean>(false)

    const submitForm = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmittingState(true)
        const formData = new FormData(event.currentTarget);
        const formValues: Record<string, string> = {};       

        formData.forEach((value, key) => {
          formValues[key] = value as string;
        });
      
        const JSONdata = JSON.stringify(formValues)
        const endpoint = event.currentTarget.action
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options)
        if(response.status == 200){
            setEmailSent(true)
        }
        
        setSubmittingState(false)
    }
    
    return (
        <div className="relative bg-cover bg-center overflow-hidden">
            <Image
                alt="Banner image"
                src={'/images/amp-contact-bg.webp'}
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'right top', 
                }} className="bg-top"
                />
            <div className="absolute z-10 inset-0 bg-gradient-to-b from-black/80 to-black/95"></div>
            <section className={classNames(
                className,
                'container py-8 md:py-16 lg:py-24'
            )}>
                <motion.div className="relative z-20"
                    initial={{ opacity: 0, y:'25%' }}
                    whileInView={{ opacity: 1, y:0 }} 
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}>
                    <div className="w-full space-y-8">
                        <div className="grid grid-cols-12 gap-x-6 items-center pb-16">
                            <div className="col-span-7 relative">
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
                                        <h3 className="uppercase text-violet-500 text-lg">Contact</h3>
                                        <h2 className="text-4xl leading-[50px] text-zinc-200 font-extrabold uppercase md:text-[90px] md:leading-[74px]">Let&#39;s<br /> Connect</h2>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-span-5 relative h-full flex items-end -mb-10">
                                <div className="text-zinc-50 text-2xl sm:text-[18px] sm:leading-[30px]">
                                    <h3 className="text-base font-extrabold text-violet-500 uppercase ">Lorem ipsum dolor sit amet</h3>
                                    <p>Nunc id nibh sed nunc tristique congue quis at mi. Pellentesque in augue vehicula augue blandit pulvinar.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-6 relative">
                                <div className="absolute -top-4 right-4 z-10">
                                    <div className="bg-violet-500 rounded-full h-40 w-40 outline outline-offset-4 outline-4 outline-violet-500 mr-auto rotate-12">
                                        <a className="text-center h-40 w-40 flex flex-col gap-2 items-center justify-center pb-8 pt-4" href="#">
                                            <Users className="h-16 w-16 text-white" />
                                            <span className="text-xl text-white uppercase">Contact<br /> Brandon</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-5 relative"> 
                                <div className="absolute -top-[6px] -left-6 w-0 h2">
                                    <ul className="relative -rotate-90 flex justify-end flex-nowrap w-0">
                                        <li className="inline-block m-0">
                                            <a className="text-xl text-white capitalize block pr-[50px] relative after:content-[''] after:absolute after:w-[30px] after:right-[10px] after:top-2/4 after:translate-y-[50%] after:bg-white after:h-[1px] group-hover:text-violet-500" href="#">facebook</a>
                                        </li>
                                        <li className="inline-block m-0">
                                            <a className="text-xl text-white capitalize block pr-[50px] relative after:content-[''] after:absolute after:w-[30px] after:right-[10px] after:top-2/4 after:translate-y-[50%] after:bg-white after:h-[1px] group-hover:text-violet-500" href="#">twitter</a>
                                        </li>
                                        <li className="inline-block m-0"> 
                                            <a className="text-xl text-white capitalize block pr-[50px] relative after:content-[''] after:absolute after:w-[30px] after:right-[10px] after:top-2/4 after:translate-y-[50%] after:bg-white after:h-[1px] group-hover:text-violet-500" href="#">instagram</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border border-solid border-zinc-500 bg-zinc-800/40 backdrop-blur-sm px-8 py-10 h-full flex flex-col justify-start items-center">
                                    <div className="my-auto">
                                        <div className="text-violet-500 font-extrabold uppercase md:text-[30px] md:leading-[30px] pb-4">                           
                                            <h3 className="">Contact<br />Info</h3>
                                        </div>
                                        <ul className="mt-2 space-y-4">
                                            <li className="flex">
                                                <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                                    <Clock className=" text-[#252440]" />
                                                </div>
                                                <Link  href={`mailto:webteam@advantagemediapartners.com`} title="email" className="text-white text-sm ml-3">
                                                    <strong className="block text-base text-zinc-400">Email</strong>
                                                    <div>brandon@hollen-b.com</div>
                                                </Link>
                                            </li>

                                            <li className="flex items-center">
                                                <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                                    <MapPin className=" text-[#252440]" />
                                                </div>
                                                <div className="text-white text-sm ml-3" >
                                                    <strong className="block text-base text-zinc-300">Address</strong>
                                                    <p className="font-extralight">Oregon City, Oregon, 97045</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="col-span-5 col-start-7 relative mt-20">
                                <div className="h-full bg-violet-500 absolute top-0 bottom-0 -right-7 w-2" />
                                <div className="space-y-4">
                                    <div className="text-white font-extrabold uppercase md:text-[30px] md:leading-[30px] text-right">
                                        <h3>Send a<br /> Message</h3>
                                    </div>
                                    { emailSent 
                                        ? (
                                            <div className="text-white text-base">
                                                Thank you for contacting us! Your email has been received, and we will respond to you shortly.
                                            </div>
                                        )
                                        : (
                                            <form action='/api/contact' method='POST' onSubmit={submitForm} className="space-y-4">
                                                <input type='text' name='name' placeholder='Name'
                                                    className="w-full rounded-sm py-2 px-4 text-sm text-white border border-solid border-zinc-500 bg-zinc-800/50 backdrop-blur-sm" />
                                                <input type='email' name='replyTo' placeholder='Email'
                                                    className="w-full rounded-sm py-2 px-4 text-sm text-white border border-solid border-zinc-500 bg-zinc-800/50 backdrop-blur-sm" />
                                                <textarea placeholder='Message' name='message' rows={5} className="w-full rounded-sm py-2 px-4 text-sm text-white border border-solid border-zinc-500 bg-zinc-800/50 backdrop-blur-sm"></textarea>
                                                <div className="flex justify-end">
                                                    <Button type='submit' color='primary' label="Send" disabled={submitting} />
                                                </div>
                                            </form>
                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}