export type KeyValuePair = {
  [key: string]: string | number | JSX.Element | null | undefined;
};

export enum ModalActionEnum {
  EmptyCart = 'EmptyCart',
  Confirm = 'Confirm',
}

export type ModalStateType = {
  title?: string;
  details?: string | JSX.Element;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  open: boolean;
  actionType: ModalActionEnum;
} | null;

export interface RegisterForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export type LoginForm = {
  email: string;
  password: string;
};

export type Profile = {
  firstName: string;
  lastName: string;
};

export type User = {
  id: string;
  email: string;
  profile: Profile;
};

export interface Errors {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export type FormActionType = {
  error?: string;
  errors?: Errors;
  fields?: RegisterForm;
  form?: string;
};

export type Severity = 'success' | 'error' | 'info' | 'warning';
