import { useEffect, useState } from 'react';
import { Form, useActionData } from '@remix-run/react';
import BasicButton from '~/components/common/atom/BasicButton/BasicButton';
import LinkButton from '~/components/common/atom/LinkButton/LinkButton';
import { FormActionType, UserErrors } from '~/types/types';
import CustomAlert from '~/components/common/atom/CustomAlert/CustomAlert';
import initForm from '~/utils/initialValues';
import TextField from '~/components/common/atom/TextField/TextField';

const initFormElementError = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
};

const SignInForm = () => {
  const actionData = useActionData<FormActionType>();
  const errors: UserErrors | undefined = actionData?.errors;
  const error: string | undefined = actionData?.error;

  const [action, setAction] = useState('login');
  const [formData, setFormData] = useState(initForm);
  const [formError, setFormError] = useState('');
  const [formElementError, setFormElementError] =
    useState<UserErrors>(initFormElementError);

  const {
    email: errorEmail,
    password: errorPassword,
    confirmPassword: errorConfirmPassword,
    lastName: errorLastName,
    firstName: errorFirstName,
  } = formElementError;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((form) => ({ ...form, [name]: value }));
    setFormElementError((form) => ({ ...form, [name]: '' }));
  };

  const handleActionClick = () => {
    setAction(action == 'login' ? 'register' : 'login');
  };

  const handleReset = () => {
    setFormError('');
    setFormElementError(initFormElementError);
  };

  useEffect(() => {
    if (error) setFormError(error);
  }, [error]);

  useEffect(() => {
    if (errors) setFormElementError(errors);
  }, [errors]);

  const canSubmit =
    action === 'login'
      ? !errorEmail && !errorPassword
      : action === 'register'
      ? !errorEmail &&
        !errorPassword &&
        !errorConfirmPassword &&
        !errorFirstName &&
        !errorLastName
      : true;

  return (
    <div className='flex flex-1 flex-col justify-center items-center gap-y-6 rounded bg-blue-100 shadow-xl mx-4 p-6 w-auto'>
      <div className='text-center space-y-1'>
        <h2 className='text-blue-600'>
          {action === 'login' ? 'Sign in' : 'Create your account'}
        </h2>

        <div className='flex flex-row items-center space-x-2'>
          <p className='text-lg'>
            {action === 'login'
              ? `Don't have an account?`
              : `Already have an account?`}
          </p>
          <LinkButton
            title={action === 'login' ? 'Sign up' : 'Login'}
            onClick={() => {
              handleReset();
              handleActionClick();
            }}
            className='text-lg underline underline-offset-2
           hover:decoration-2 '
          />
        </div>
      </div>

      {formError && <CustomAlert message={formError} severity='error' />}

      <Form method='post' className='w-full'>
        {action === 'register' && (
          <>
            <TextField
              formId='firstName'
              name='firstName'
              label='First Name'
              error={formElementError?.firstName}
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <TextField
              formId='lastName'
              name='lastName'
              label='Last Name'
              error={formElementError?.lastName}
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </>
        )}

        <TextField
          formId='email'
          name='email'
          label='Email'
          value={formData.email}
          error={formElementError?.email}
          onChange={handleInputChange}
        />
        <TextField
          type='password'
          name='password'
          formId='password'
          label='Password'
          error={formElementError?.password}
          value={formData.password}
          onChange={handleInputChange}
        />

        {action === 'register' && (
          <TextField
            type='password'
            formId='confirmPassword'
            name='confirmPassword'
            label='Confirm password'
            error={formElementError?.confirmPassword}
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        )}

        <div className='w-full text-center py-2'>
          <BasicButton
            disabled={!canSubmit}
            type='submit'
            name='_action'
            value={action}
            btnTitle={action === 'login' ? 'Sign in' : 'Sign Up'}
            onClick={handleReset}
            className='mt-2 rounded-full'
          />
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
