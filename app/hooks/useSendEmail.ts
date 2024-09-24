import { useState } from 'react';
import { send } from '@emailjs/browser';
import { ICheckoutForm, OrderSummary } from '~/types/checkout';
import { useAppSelector } from '~/redux/store';
import { defaultApiCallError } from '~/utils/defaultValues';
import { Status } from '~/types/types';

const useSendEmail = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<Status | null>(null);
  const cartItems = useAppSelector((state) => state.cart.addedItems);
  const orderSummaryMessage: OrderSummary[] = cartItems.map((item) => {
    return { name: `${item.count} x ${item.foodName}`, price: item.price };
  });

  const currentDate = new Date().toLocaleString('no-No', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleSendEmail = (data: ICheckoutForm) => {
    setIsSubmitting(true);
    send(
      process.env.EMAILJS_SERVICE_ID ?? '',
      process.env.EMAILJS_TEMPLATE_ID ?? '',
      {
        to_name: data.firstName,
        from_name: 'TacoShop',
        date: currentDate,
        to_fullname: `${data.firstName} ${data.lastName}`,
        to_address: `${data.streetAddress} ${data.apartmentNumber}, ${data.postcode}, ${data.city}, ${data.country}`,
        to_email: data.email,
        order_summary: JSON.stringify(orderSummaryMessage),
      },
      { publicKey: process.env.EMAILJS_PUBLIC_KEY ?? '' }
    ).then(
      () => {
        setStateMessage({ code: 200, message: 'Order sent!' });
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000);
      },
      (error) => {
        setStateMessage({
          code: 500,
          message: `${defaultApiCallError.generic} ${error?.text}`,
        });
        setTimeout(() => {
          setStateMessage(null);
        }, 5000);
      }
    );
  };

  return {
    isSubmitting,
    stateMessage,
    handleSendEmail,
  };
};

export default useSendEmail;
