import InputMask from 'react-input-mask';
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useLoading } from '../../hooks/useLoading';

interface InputTextRootProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
  mask?: any;
}

export default function InputTextRoot({ register, mask, ...props }: InputTextRootProps) {
  const { isLoading } = useLoading();

  return (
        <InputMask
          {...props}
          type="text"
          mask={mask}
          disabled={isLoading}
          className="text-black"
          {...(register ? { ...register } : {})}
        />
  );
}
