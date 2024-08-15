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
