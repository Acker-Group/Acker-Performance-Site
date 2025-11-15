import { FC, ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, variant = 'primary', size = 'md', className = '' }) => {
    const baseStyle = "font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl uppercase tracking-wide";
    
    const variants = {
        primary: "bg-accent text-white hover:bg-accent-dark shadow-accent/50",
        secondary: "bg-white text-jet-black hover:bg-gray-100",
        outline: "bg-transparent text-white border-2 border-accent hover:bg-accent"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <button 
            onClick={onClick} 
            className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;