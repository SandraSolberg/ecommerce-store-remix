enum CountryCodeEnum {
  NO = 'NO (+47)',
  SE = 'SE (+46)',
  DK = 'DK (+45)',
  GB = 'GB (+44)',
}

export interface ICheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  country: string;
  streetAddress: string;
  postcode: number | null;
  phoneNumber: number | null;
  countryCode: CountryCodeEnum | null;
}

export interface OrderSummary {
  name: string;
  price: number;
}
