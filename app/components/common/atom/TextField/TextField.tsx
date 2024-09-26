import { ChangeEvent } from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formId: string;
  label?: string;
  value?: string | number | readonly string[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  hasError?: boolean;
}

const TextField = ({
  label,
  value,
  onChange,
  formId,
  error,
  hasError,
  ...rest
}: TextFieldProps) => {
  return (
    <div className='flex flex-col'>
      {label && <label htmlFor={formId}>{label}</label>}
      <input
        onChange={onChange}
        id={formId}
        name={formId}
        className={`min-w-56 mb-2  ${
          error || hasError ? 'border-2 border-red-500' : ''
        }`}
        value={value}
        {...rest}
      />
      {error && (
        <p className='max-w-56 text-xs font-semibold tracking-wide text-red-500 w-full'>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextField;
