import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-8 py-3.5 rounded-lg font-medium transition-all duration-300 inline-block';
  
  const variants = {
    primary: 'bg-sky-tech text-white shadow-lg shadow-sky-tech/20 hover:bg-sky-600 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-tech/30',
    secondary: 'bg-transparent text-indigo-deep border-2 border-lavender-soft hover:bg-lavender-soft hover:border-indigo-deep'
  };
  
  const widthStyle = fullWidth ? 'w-full text-center' : '';
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};