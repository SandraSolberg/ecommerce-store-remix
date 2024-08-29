import { ChangeEvent, useEffect, useState } from 'react';

type FormFieldProps = {
  formId: string;
  type?: string;
  label: string;
  value: string | number | readonly string[] | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const FormField = ({
  label,
  value,
  onChange,
  formId,
  type,
  error,
}: FormFieldProps) => {
  const [errorText, setErrorText] = useState(error);

  useEffect(() => {
    setErrorText(error);
  }, [error]);

  return (
    <div className='flex flex-col'>
      <label className='text-blue-600 font-semibold'>{label}</label>
      <input
        onChange={(e) => {
          onChange(e);
          setErrorText('');
        }}
        type={type}
        id={formId}
        name={formId}
        className={`min-w-56 p-2 rounded mb-2 bg-white  ${
          error ? 'border-2 border-red-500' : 'border border-gray-300'
        }`}
        value={value}
      />
      <span className='max-w-56 text-xs font-semibold text-center tracking-wide text-red-500 w-full'>
        {errorText ?? ''}
      </span>
    </div>
  );
};

export default FormField;
