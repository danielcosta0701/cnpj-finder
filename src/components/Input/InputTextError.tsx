import { HTMLProps } from 'react';
import { FieldError } from 'react-hook-form';

interface InputTextErrorProps extends HTMLProps<HTMLSpanElement> {
  errors?: FieldError;
}

export default function InputTextError({ errors, ...props }: InputTextErrorProps) {
  return (
    <>
      {errors && (
        <span {...props}>
          {errors.message}
        </span>
      )}
    </>
  );
}
