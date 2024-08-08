import { HTMLProps } from 'react';
import { FieldError } from 'react-hook-form';

interface InputTextErrorProps extends HTMLProps<HTMLSpanElement> {
  error?: FieldError;
}

export default function InputTextError({ error, ...props }: InputTextErrorProps) {
  return (
    <>
      {error && (
        <span {...props}>
          {error.message}
        </span>
      )}
    </>
  );
}
