interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formId: string;
  error?: string;
  className?: string;
}

const CustomInput = ({ formId, error, className, ...rest }: InputProps) => {
  return (
    <div className='flex flex-col'>
      <input
        className={`${className} ${error ? 'border-2 border-red-500' : ''}`}
        id={formId}
        {...rest}
      />

      <p className='max-w-56 text-xs font-semibold tracking-wide text-red-500 w-full min-h-4'>
        {error ?? ''}
      </p>
    </div>
  );
};

export default CustomInput;
