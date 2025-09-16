"use client"
import classNames from "classnames";
import Styles  from './Divider.module.css';
import { GetTailwindScreens } from "@/lib/GetTailwindScreens"
import { useEffect, useState } from "react";

type Screens = {
    xs?:string,
    sm?:string, 
    md?:string, 
    lg?:string, 
    xl?:string
}

type DividerProps = {
    className?:string; 
    height:Screens | string;
    children?: React.ReactNode; 
    repeat?:number; 
    color?:string;
    yPos?:"top" | "bottom";
}

const SvgData = (PathD: string, { className, children, repeat, color, height, yPos }: DividerProps) => {
    const getScreens = GetTailwindScreens()
    const [dividerHeight, setDividerHeight] = useState<String>()
    const svgURL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 2000 100'%3E%3Cpath d='${PathD}'/%3E%3C/svg%3E")`;
    const repeatSize = repeat && repeat >= 1 ? (100 / repeat)+'%' : 'auto';
    const bgColor = color ? color:'#ffffff';
    
    useEffect(() => {
        if (typeof height === 'object') {
            const heights = Object.entries(height);
            const screens = Object.entries(getScreens);
            let setHeight = ""
            screens.map((h)=>{
                let findHeight = heights.find((height) => height[0] == h[1]);
                if(findHeight){
                    setHeight = findHeight[1]
                }
            })
            setDividerHeight(setHeight)
        }
        if (typeof height === 'string') {
            setDividerHeight(height)
        }
    }, [getScreens, height])
    
    return(
    <div className={classNames(
        className,
        Styles.divider
    )}>
        <div 
            className={classNames(
                yPos && yPos === 'bottom' ? '-bottom-[2px]':'-top-[2px] rotate-180', 
                'absolute z-20 w-full'
            )} style={{
                height: dividerHeight,
                WebkitMaskImage: svgURL,
                WebkitMaskRepeat:'repeat-x',
                WebkitMaskPositionY:'bottom left',
                WebkitMaskSize:`${repeatSize} 100%`,
                maskImage: svgURL,
                maskRepeat:'repeat-x',
                maskPosition:'bottom left',
                maskSize:`${repeatSize} 100%`,
                backgroundColor:bgColor,
            } as React.CSSProperties} 
        />
        <div className={classNames(
            yPos && yPos === 'bottom' && 'flex-col-reverse',  
            "flex flex-col h-full"
        )}>
            <div>
                <hr 
                    className={classNames(
                        Styles.dividerShape,
                        "w-full"
                    )} 
                    style={{
                        height: dividerHeight,
                        border:'none',
                    } as React.CSSProperties} 
                />
            </div>
            <div>{children}</div>
        </div>
    </div>
)};

export const Divider = {
    Wave: (props:DividerProps) => SvgData('M500,0C333.3,0,166.7,15.2,0,45.5V100c0,0,1389.9,0,2000,0V45.5c-166.7,30.3-333.3,45.5-500,45.5 C1092.6,90.9,909.1,0,500,0z', props),
    Bend: (props:DividerProps) => SvgData('M0,100c0,0,1389.9,0,2000,0V0c-320,29.7-679.1,51.6-1000,68.2C654.3,86,346.7,97.4,0,100z', props),
    Angle: (props:DividerProps) => SvgData('M0,100c0,0,1389.9,0,2000,0V0L0,100z', props),
    Point: (props:DividerProps) => SvgData('M2000,100H0V0h910c0,0,60,60,90,90l90-90h910C2000,0,2000,66.7,2000,100z', props),  
};