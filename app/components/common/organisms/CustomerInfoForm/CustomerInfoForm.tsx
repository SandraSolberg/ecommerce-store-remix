import { useForm, SubmitHandler } from 'react-hook-form';
import BasicButton from '../../atom/BasicButton/BasicButton';
import { ICheckoutForm } from '~/types/checkout';
import './customerInformationForm.css';
import useSendEmail from '~/hooks/useSendEmail';
import CustomAlert from '../../atom/CustomAlert/CustomAlert';

const CustomerInfoForm = () => {
  const { register, handleSubmit } = useForm<ICheckoutForm>();
  const { handleSendEmail, isSubmitting, stateMessage } = useSendEmail();

  const onSubmit: SubmitHandler<ICheckoutForm> = (data) =>
    handleSendEmail(data);

  return (
    <div>
      <h2 className='mb-4'>Details</h2>

      <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <h3>Shipping Information</h3>
        <div>
          <fieldset className='fieldset'>
            <label htmlFor='firstName'>Name</label>
            <div className='group'>
              <input
                type='text'
                id='firstName'
                placeholder='First Name'
                {...register('firstName')}
              />

              <input
                type='text'
                id='lastName'
                placeholder='Last Name'
                {...register('lastName')}
              />
            </div>
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='delivery-address'>Delivery Address</label>
            <div className='group'>
              <input
                type='text'
                id='delivery-address'
                {...register('streetAddress')}
                placeholder='Street Address'
              />
              <input
                type='text'
                {...register('apartmentNumber')}
                placeholder='Apt #'
              ></input>
            </div>
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' {...register('email')} />
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='delivery-postcode'>Postcode</label>
            <input
              type='text'
              id='delivery-postcode'
              {...register('postcode')}
            />
            <div className='group'></div>
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='billing-city'>City</label>
            <input type='text' id='billing-city' {...register('city')} />
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='billing-country'>Country</label>
            <input type='text' id='billing-country' {...register('country')} />
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='phoneNumber-country-code'>Phone</label>
            <div className='group'>
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
