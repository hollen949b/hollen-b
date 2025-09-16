'use client';
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export const SubItem = ({
    label,
    route,
    children,
    className,
}: {
    label:string | null;
    route:string;
    children?:React.ReactNode;
    className?:string;
}) => {
    const pathName = usePathname()
    const activeItem = (pathName && pathName.endsWith(route)) ? 'active':'';
    return(
        <div className={classNames(
            className, 
            'nav-item-child',
            activeItem
        )}>
            <div className="nav-item-links">
                { label &&
                    <div className="nav-item-link">
                        <div className="relative">
                            <Link href={route} className="px-2 py-4 block font-semibold">{label}</Link>
                        </div>
                        { children &&
                            <div className="relative">
                                <div className="nav-item-children">
                                    {children}
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}
