import { ChangeEvent } from 'react';

type FormFieldProps = {
  formId: string;
  type?: string;
  label: string;
  value: string | number | readonly string[] | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormField = ({
  label,
  value,
  onChange,
  formId,
  type,
}: FormFieldProps) => {
  return (
    <div>
      <label className='text-blue-600 font-semibold'>{label}</label>
      <input
        onChange={onChange}
        type={type}
        id={formId}
        name={formId}
        className='w-full p-2 rounded my-2'
        value={value}
      />
    </div>
  );
};

export default FormField;
