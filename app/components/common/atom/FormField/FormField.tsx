import { ChangeEvent, useEffect, useState } from 'react';
import CustomInput from '../CustomInput/CustomInput';

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
      <CustomInput
        formId='formId'
        error={errorText}
        onChange={(e) => {
          onChange(e);
          setErrorText('');
        }}
        name={formId}
        className='min-w-56 mb-2'
        value={value}
        {...rest}
      />
    </div>
  );
};

export default FormField;
