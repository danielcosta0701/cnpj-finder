import { ReactNode, HTMLProps } from 'react';

interface InputTextFieldProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
}

export default function InputTextField({ children, ...props }: InputTextFieldProps) {
    return (
        <div
            {...props}
        >
            {children}
        </div>
    );
}
