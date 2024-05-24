import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface ButtonProps {
    label: string;
    disabled?: boolean;
    href: Url;
    className?: string;
    themeDark?: boolean;
    onClick?: () => void;
}

export default function Button({ label, disabled, href, className, themeDark, onClick }: ButtonProps) {
    return (
        <Link href={href}>
            <button onClick={onClick} className={`${disabled ? 'hidden' : ''} ${className} ${themeDark ? 'px-4 py-2 border border-gray-300 text-gray-300 bg-gray-800 rounded-lg shadow-sm lg:hover:bg-gray-700 lg:active:bg-gray-900 lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-offset-2 lg:focus:ring-gray-500 transition ease-in-out duration-150' : 'px-4 py-2 border border-black text-black rounded-lg shadow-sm lg:hover:bg-gray-100 lg:active:bg-gray-200 lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-offset-2 lg:focus:ring-gray-500 transition ease-in-out duration-150'}`}>
                {label}
            </button>
        </Link>
    )
}