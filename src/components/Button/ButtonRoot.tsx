import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonRoot({ children, ...props }: ButtonRootProps) {
  return (
    <button 
        {...props}
    >
      {children}
    </button>
  );
}