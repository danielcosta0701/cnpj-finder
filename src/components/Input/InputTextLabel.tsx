import { HTMLProps } from 'react';

interface InputTextLabelProps extends HTMLProps<HTMLLabelElement> {
  label: string;
  htmlFor: string;
}

export default function InputTextLabel({ label, htmlFor, ...props }: InputTextLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
    >
      {label}
    </label>
  );
}
