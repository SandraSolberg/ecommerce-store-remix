import { Form } from '@remix-run/react';
import { useState } from 'react';
import BasicButton from '~/components/atom/BasicButton/BasicButton';
import FormField from '~/components/atom/FormField/FormField';
import LinkButton from '~/components/atom/LinkButton/LinkButton';

const SignInForm = () => {
  const [action, setAction] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

  const handleActionClick = () => {
    setAction(action == 'login' ? 'register' : 'login');
  };

  return (
    <div className='flex flex-col justify-center items-center gap-y-6 rounded bg-blue-100 shadow-xl p-6 md:max-w-96'>
      <h1 className='text-3xl text-blue-600'>
        {action === 'login' ? 'Sign in' : 'Create your account'}
      </h1>

      <div className='flex flex-row items-center space-x-2'>
        <p>
          {action === 'login'
            ? `Don't have an account?`
            : `Already have an account?`}
        </p>
        <LinkButton
          title={action === 'login' ? 'Sign up' : 'Login'}
          onClick={handleActionClick}
          className=' underline underline-offset-2 hover:decoration-2 '
        />
      </div>

      <Form method='post'>
        {action === 'register' && (
          <>
            <FormField
              formId='firstName'
              label='First Name'
              value={formData.firstName}
              onChange={(e) => handleInputChange(e, 'firstName')}
            />
            <FormField
              formId='lastName'
              label='Last Name'
              value={formData.lastName}
              onChange={(e) => handleInputChange(e, 'lastName')}
            />
          </>
        )}

        <FormField
          formId='email'
          label='Email'
          value={formData.email}
          onChange={(e) => handleInputChange(e, 'email')}
        />
        <FormField
          type='password'
          formId='password'
          label='Password'
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
