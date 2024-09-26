import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import BasicButton from '../../atom/BasicButton/BasicButton';
import { ICheckoutForm } from '~/types/checkout';
import useSendEmail from '~/hooks/useSendEmail';
import CustomAlert from '../../atom/CustomAlert/CustomAlert';
import { errorMessage } from '~/utils/errorMessages';
import TextField from '../../atom/TextField/TextField';
import './customerInformationForm.css';

const CustomerInfoForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ICheckoutForm>();
  const { handleSendEmail, isSubmitting, stateMessage } = useSendEmail();

  const onSubmit: SubmitHandler<ICheckoutForm> = (data) =>
    handleSendEmail(data);

  return (
    <div>
      <h2 className='mb-4 text-center'>Details</h2>
      <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <h3 className='text-center'>Shipping Information</h3>
        <div>
          <fieldset className='fieldset'>
            <div className='space-y-2 md:flex md:items-end md:space-x-2 md:space-y-0'>
              <Controller
                control={control}
                name='firstName'
                rules={{ required: errorMessage.required }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label='Name'
                    formId='firstName'
                    onChange={onChange}
                    value={value}
                    error={errors.firstName?.message}
                    hasError={!!errors.firstName}
                    placeholder='First name'
                  />
                )}
              />

              <Controller
                control={control}
                name='lastName'
                rules={{ required: errorMessage.required }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    formId='lastName'
                    onChange={onChange}
                    value={value}
                    error={errors.lastName?.message}
                    hasError={!!errors.lastName}
                    placeholder='Last name'
                  />
                )}
              />
            </div>
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='streetAddress'>Delivery Address</label>
            <Controller
              control={control}
              name='streetAddress'
              rules={{
                required: errorMessage.required,
                minLength: { value: 2, message: errorMessage.deliveryAddress },
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  formId='streetAddress'
                  onChange={onChange}
                  value={value}
                  error={errors.streetAddress?.message}
                  hasError={!!errors.streetAddress}
                />
              )}
            />
          </fieldset>

          <fieldset className='fieldset'>
            <label htmlFor='email'>Email</label>
            <Controller
              control={control}
              name='email'
              rules={{
                required: errorMessage.required,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                  message: errorMessage.invalidEmailPattern,
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  formId='email'
                  onChange={onChange}
                  value={value}
                  error={errors.email?.message}
                  hasError={!!errors.email}
                />
              )}
            />
          </fieldset>

          <fieldset className='fieldset'>
            <div className='space-y-2 md:flex md:items-end md:space-x-2 md:space-y-0'>
              <Controller
                control={control}
                name='postcode'
                rules={{ required: errorMessage.required }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    formId='postcode'
                    label='Post code'
                    onChange={onChange}
                    value={value ?? ''}
                    error={errors.postcode?.message}
                    hasError={!!errors.postcode}
                    placeholder='Zip'
                    type='number'
                  />
                )}
              />
              <Controller
                control={control}
                name='city'
                rules={{ required: errorMessage.required }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    formId='city'
                    onChange={onChange}
                    value={value ?? ''}
                    error={errors.city?.message}
                    hasError={!!errors.city}
                    placeholder='City'
                  />
                )}
              />
            </div>
          </fieldset>

          <fieldset className='fieldset'>
            <Controller
              control={control}
              name='country'
              rules={{ required: errorMessage.required }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label='Country'
                  formId='country'
                  onChange={onChange}
                  value={value ?? ''}
                  error={errors.country?.message}
                  hasError={!!errors.country}
                />
              )}
            />
          </fieldset>

          {/*           <fieldset className='fieldset'>
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
                type='number'
                id='phoneNumber'
                {...register('phoneNumber')}
              />
            </div>
          </fieldset> */}
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
