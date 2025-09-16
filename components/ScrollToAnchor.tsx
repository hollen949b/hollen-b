"use client"
import { useEffect } from 'react';

const ScrollToAnchor = () => { 
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const href = e.currentTarget.href;
        // get the href and remove everything before the hash (#)
        const targetId = href.replace(/.*\/\#/, "");
        // if(href.endsWith(`/#${targetId}`)){
        //     e.preventDefault();
        // } #topOfPage

        if(href.endsWith(`/#topOfPage`)){
            e.preventDefault();
        }

        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
    }

    useEffect(() => {       
        const allLinks = document.querySelectorAll('a');
        allLinks.forEach(function (link:any) {
            link.addEventListener('click', handleScroll);
        });
    });   
    return(false)
}

export default ScrollToAnchor