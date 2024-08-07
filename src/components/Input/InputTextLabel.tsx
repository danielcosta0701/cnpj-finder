import { ReactNode, HTMLProps } from 'react';

interface InputTextLabelProps extends HTMLProps<HTMLLabelElement> {
    children: ReactNode;
}

export default function InputTextLabel({ children, ...props }: InputTextLabelProps) {
    return (
        <label
            {...props}
        >
            {children}
        </label>
    );
}