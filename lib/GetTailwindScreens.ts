import resolveConfig from 'tailwindcss/resolveConfig';
import theme from '@/tailwind.config';
import { useMediaQuery } from 'react-responsive'

type Screens = {
    sm?:string, 
    md?:string, 
    lg?:string, 
    xl?:string
}

export const GetTailwindScreens = () => {
    let sizes = Array()
    const fullConfig = resolveConfig(theme);
    const twScreens = fullConfig.theme?.screens as Screens;
    
    const isXS = useMediaQuery({ query: `(min-width: 0px)` });
    const isSM = useMediaQuery({ query: `(min-width: ${twScreens.sm})` });
    const isMD = useMediaQuery({ query: `(min-width: ${twScreens.md})` });
    const isLG = useMediaQuery({ query: `(min-width: ${twScreens.lg})` });
    const isXL = useMediaQuery({ query: `(min-width: ${twScreens.xl})` });
    
    if(isXS){
        sizes.push("xs")
    }

    if(isSM){
        sizes.push("sm")
    }

    if(isMD){
        sizes.push("md")
    }

    if(isLG){
        sizes.push("lg")
    }

    if(isXL){
        sizes.push("xl")
    }

    // console.log(sizes)

    return sizes;
}