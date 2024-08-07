import { ReactNode, HTMLProps } from 'react';

interface InputTextErrorProps extends HTMLProps<HTMLSpanElement> {
    children: ReactNode;
}

export default function InputTextError({ children, ...props }: InputTextErrorProps) {
    return (
        <span
            {...props}
        >
            {children}
        </span>
    );
}
