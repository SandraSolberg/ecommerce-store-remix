import { ChangeEvent, useEffect, useState } from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formId: string;
  label?: string;
  value?: string | number | readonly string[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormField = ({
  label,
  value,
  onChange,
  formId,
  error,
  ...rest
}: FormFieldProps) => {
  const [errorText, setErrorText] = useState(error);

  useEffect(() => {
    setErrorText(error);
  }, [error]);

  return (
    <div className='flex flex-col'>
      {label && <label htmlFor={formId}>{label}</label>}
      <input
        onChange={(e) => {
          onChange(e);
          setErrorText('');
        }}
        id={formId}
        name={formId}
        className={`min-w-56 mb-2  ${
          errorText ? 'border-2 border-red-500' : ''
        }`}
        value={value}
        {...rest}
      />
      <p className='max-w-56 text-xs font-semibold tracking-wide text-red-500 w-full min-h-'>
        {errorText ?? ''}
      </p>
    </div>
  );
};

export default FormField;
