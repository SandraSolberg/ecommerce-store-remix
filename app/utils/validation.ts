import { errorMessage } from './errorMessages';

export const validateEmail = (email: string): string | undefined => {
  const hasCorrectPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    email
  );
  if (email.length === 0 || !email.includes('@')) {
    return errorMessage.invalidEmail;
  }
  if (!hasCorrectPattern) {
    return errorMessage.invalidEmailPattern;
  }
};

export const validateRequired = (field: string) => {
  return field.length > 0 ? undefined : errorMessage.required;
};

export const containsUppercase = (str: string) => {
  return /[A-Z]/.test(str);
};

export const containsLowercase = (str: string) => {
  return /[a-z]/.test(str);
};

export const validatePassword = (password: string): string | undefined => {
  const hasUppercaseCheck = /[A-Z]/.test(password);
  const hasLowercaseCheck = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  if (password.length < 6) {
    return errorMessage.passwordLength;
  }

  if (!hasLowercaseCheck) {
    return errorMessage.passwordLowercase;
  }

  if (!hasUppercaseCheck) {
    return errorMessage.passwordUppercase;
  }

  if (!hasNumber) {
    return errorMessage.passwordNoNumber;
  }
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
) => {
  if (password !== confirmPassword) {
    return errorMessage.confirmPassword;
  }
};

export const validateName = (name: string): string | undefined => {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;
  const hasNumberSpecialCharacter = regex.test(name);

  if (name.length === 0) return errorMessage.required;

  if (hasNumberSpecialCharacter) return errorMessage.invalidName;
};
