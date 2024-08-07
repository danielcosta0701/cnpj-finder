import { InputHTMLAttributes } from 'react';

interface InputTextRootProps extends InputHTMLAttributes<HTMLInputElement> {

}

export default function InputTextRoot({...props }: InputTextRootProps) {
    return (
        <input
            {...props}
            type="text"
        />
    );
}
