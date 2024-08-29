import { useState } from 'react';
import { Form, useActionData } from '@remix-run/react';
import BasicButton from '~/components/atom/BasicButton/BasicButton';
import FormField from '~/components/atom/FormField/FormField';
import LinkButton from '~/components/atom/LinkButton/LinkButton';
import { Errors, FormActionType } from '~/types/types';
import initForm from '~/utils/initialValues';

const SignInForm = () => {
  const actionData = useActionData<FormActionType>();
  console.log('actionData', actionData?.errors);
  const errors: Errors | undefined = actionData?.errors;
  const formError: string | undefined = actionData?.error;

  const [action, setAction] = useState('login');
  const [formData, setFormData] = useState(initForm);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

  const handleActionClick = () => {
    setAction(action == 'login' ? 'register' : 'login');
  };

  console.log('formError ', !!formError, 'errors', !!errors);

  return (
    <div className='flex flex-1 flex-col justify-center items-center gap-y-6 rounded bg-blue-100 shadow-xl mx-4 p-6 w-auto'>
      <div className='text-center space-y-1'>
        <h2 className='text-3xl text-blue-600'>
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
            onClick={handleActionClick}
            className='text-lg underline underline-offset-2
           hover:decoration-2 '
          />
        </div>
      </div>

      <Form method='post'>
        {action === 'register' && (
          <>
            <FormField
              formId='firstName'
              label='First Name'
              error={errors?.firstName}
              value={formData.firstName}
              onChange={(e) => handleInputChange(e, 'firstName')}
            />
            <FormField
              formId='lastName'
              label='Last Name'
              error={errors?.lastName}
              value={formData.lastName}
              onChange={(e) => handleInputChange(e, 'lastName')}
            />
          </>
        )}

        <FormField
          formId='email'
          label='Email'
          value={formData.email}
          error={errors?.email}
          onChange={(e) => handleInputChange(e, 'email')}
        />
        <FormField
          type='password'
          formId='password'
          label='Password'
          error={errors?.password}
          value={formData.password}
          onChange={(e) => handleInputChange(e, 'password')}
        />

        <div className='w-full text-center py-2'>
          <BasicButton
            type='submit'
            name='_action'
            value={action}
            title={action === 'login' ? 'Sign in' : 'Sign Up'}
            className='mt-2 rounded-full'
          />
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
