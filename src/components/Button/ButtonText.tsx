

import { ReactNode, HTMLProps }  from 'react';

interface ButtonTextProps extends HTMLProps<HTMLSpanElement> {
  children: ReactNode;
}

export default function ButtonText({ children, ...props }: ButtonTextProps) {
  return (
    <span 
        {...props}
    >
      {children}
    </span>
  );
}
