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
    primary: 'bg-gradient-purple-mid text-text-gradient-white shadow-lg shadow-gradient-purple-mid/20 hover:bg-gradient-purple-end hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gradient-purple-mid/30',
    secondary: 'bg-transparent text-text-gradient-white border-2 border-gradient-purple-start hover:bg-gradient-purple-start/20 hover:border-gradient-purple-mid'
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