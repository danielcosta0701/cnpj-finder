import { ReactNode, ButtonHTMLAttributes } from 'react';
import { useLoading } from '../../hooks/useLoading';
import { ClipLoader } from 'react-spinners';

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoadingButton?: boolean;
}

export default function ButtonRoot({ children, isLoadingButton, ...props }: ButtonRootProps) {
  const { isLoading } = useLoading();

  return (
    <button
        {...props}
        className="p-3 bg-blue-300"
    >
      {isLoadingButton && isLoading ? <ClipLoader /> : children}
    </button>
  );
}