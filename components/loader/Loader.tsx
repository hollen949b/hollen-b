import classNames from 'classnames'
import styles from './Loader.module.css'

export const LoaderPage = ({
    className
}:{
    className?:string
}) => {
    return (
        <div className={classNames(
            className,
            "fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-white"
        )}>
            <div className="bg-white border border-zinc-50 py-6 px-12 rounded-lg flex items-center flex-col shadow-2xl">
                <div className={`${styles.LoaderDots} block relative w-20 h-5 mt-2`}>
                    <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-[#F2B84B]"></div>
                    <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-[#F2B84B]"></div>
                    <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-[#F2B84B]"></div>
                    <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-[#F2B84B]"></div>
                </div>
                <div className="text-gray-500 text-xs font-light mt-2 text-center">
                    Please wait...
                </div>
            </div>
        </div>
    )
}