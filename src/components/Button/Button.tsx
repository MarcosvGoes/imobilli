interface ButtonProps {
    label: string;
    disabled?: boolean;
    className?: string;
    themeDark?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function Button({
    label,
    disabled,
    className,
    themeDark,
    onClick,
    children,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${disabled ? 'hidden' : ''} ${className} bg-white dark:bg-black text-black dark:text-white font-inherit px-3 py-1.5 font-extrabold text-lg border-2 border-black dark:border-white rounded-md shadow-[0.1em_0.1em] cursor-pointer hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] hover:shadow-[0.15em_0.15em] active:translate-x-[0.05em] active:translate-y-[0.05em] active:shadow-[0.05em_0.05em]`}
        >
            {label}
            {children}
        </button>
    );
}
