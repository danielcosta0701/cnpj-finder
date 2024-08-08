import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputTextRootProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
}

export default function InputTextRoot({ register, ...props }: InputTextRootProps) {
  return (
    <input
      {...props}
      {...(register ? { ...register } : {})}
      type="text"
    />
  );
}
