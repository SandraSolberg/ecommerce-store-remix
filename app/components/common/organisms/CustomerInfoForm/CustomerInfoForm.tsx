import { useForm, SubmitHandler } from 'react-hook-form';
import BasicButton from '../../atom/BasicButton/BasicButton';
import { ICheckoutForm } from '~/types/checkout';
import useSendEmail from '~/hooks/useSendEmail';
import CustomAlert from '../../atom/CustomAlert/CustomAlert';
import './customerInformationForm.css';

const CustomerInfoForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICheckoutForm>();
  const { handleSendEmail, isSubmitting, stateMessage } = useSendEmail();

  const onSubmit: SubmitHandler<ICheckoutForm> = (data) =>
    handleSendEmail(data);

  console.log('firstname', watch('firstName'));

  return (
    <div>
      <h2 className='mb-4 text-center'>Details</h2>
      <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <h3 className='text-center'>Shipping Information</h3>
        <div>
          <fieldset className='fieldset'>
            <label htmlFor='firstName'>Name</label>
            <div className='space-y-2 md:flex md:space-x-2 md:space-y-0'>
              <div>
                <input
                  className={`${
                    errors?.firstName ? 'border-2 border-red-500' : ''
                  }`}
                  type='text'
                  id='firstName'
                  placeholder='First Name'
                  {...register('firstName', { required: 'Name is required' })}
                />
                <p className='max-w-56 text-xs font-semibold tracking-wide text-red-500 w-full min-h-4'>
                  {errors?.firstName?.message ?? ''}
                </p>
              </div>

              <div>
                <input
                  type='text'
                  id='lastName'
                  placeholder='Last Name'
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && (
                  <span className='max-w-56 text-xs font-semibold tracking-wide text-red-500 w-full'>
                    {errors.lastName.message ?? ''}
                  </span>
                )}
              </div>
            </div>
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='delivery-address'>Delivery Address</label>
            <div className='space-y-2 md:flex md:space-x-2 md:space-y-0'>
              <div>
                <input
                  type='text'
                  id='delivery-address'
                  {...register('streetAddress', { required: true })}
                  placeholder='Street Address'
                />
                {errors.email && (
                  <span className='max-w-56 text-xs font-semibold tracking-wide text-red-500 w-full min-h-4'>
                    {errors.email.message ?? ''}
                  </span>
                )}
              </div>

              <input
                type='text'
                {...register('apartmentNumber')}
                placeholder='Apt #'
              ></input>
            </div>
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              {...register('email', { required: true })}
            />
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='delivery-postcode'>Postcode</label>
            <input
              type='text'
              id='delivery-postcode'
              {...register('postcode')}
            />
            <div className='space-y-2 md:flex md:space-x-2 md:space-y-0'></div>
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='billing-city'>City</label>
            <input
              type='text'
              id='billing-city'
              {...(register('city'), { required: true })}
            />
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='billing-country'>Country</label>
            <input type='text' id='billing-country' {...register('country')} />
          </fieldset>

          <fieldset className='fieldset'>
            <label
              className='flex items-center gap-2'
              htmlFor='phoneNumber-country-code'
            >
              Phone
              <span className='text-secondary font-normal'>Optional</span>
            </label>
            <div className='space-y-2 md:flex md:space-x-2 md:space-y-0'>
              <select
                id='phoneNumber-country-code'
                {...register('countryCode')}
              >
                <option value='NO'>NO (+47)</option>
                <option value='SE'>SE (+46)</option>
                <option value='DK'>DK (+45)</option>
                <option value='GB'>GB (+44)</option>
              </select>
              <input
                type='text'
                id='phoneNumber'
                {...register('phoneNumber')}
              />
            </div>
          </fieldset>
        </div>

        {stateMessage?.code === 200 ? (
          <CustomAlert severity={'success'} message={stateMessage.message} />
        ) : stateMessage?.code === 500 ? (
          <CustomAlert severity={'error'} message={stateMessage.message} />
        ) : null}

        <BasicButton
          btnTitle='Submit order'
          type='submit'
          isLoading={isSubmitting}
          disabled={isSubmitting || !!stateMessage}
        />
      </form>
    </div>
  );
};

export default CustomerInfoForm;
