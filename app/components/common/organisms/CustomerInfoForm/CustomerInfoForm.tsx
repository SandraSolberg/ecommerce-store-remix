import { useForm, SubmitHandler } from 'react-hook-form';
import BasicButton from '../../atom/BasicButton/BasicButton';
import './customerInformationForm.css';

enum CountryCodeEnum {
  NO = 'NO (+47)',
  SE = 'SE (+46)',
  DK = 'DK (+45)',
  GB = 'GB (+44)',
}

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  streetAddress: string;
  apartmentNumber: string;
  postcode: number;
  phoneNumber: number;
  countryCode: CountryCodeEnum;
}

const CustomerInfoForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' {...register('email')} />
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='billing-address'>Billing Address</label>
            <div className='group'>
              <input
                type='text'
                id='billing-address'
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
            <label htmlFor='billing-postcode'>Postcode</label>
            <input
              type='text'
              id='billing-postcode'
              {...register('postcode')}
            />
            <div className='group'></div>
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='billing-city'>City</label>
            <input type='text' id='billing-city' {...register('city')} />
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

        <BasicButton btnTitle='Submit order' type='submit' />
      </form>
    </div>
  );
};

export default CustomerInfoForm;
