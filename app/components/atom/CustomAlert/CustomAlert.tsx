import { Severity } from '~/types/types';
import SVGIcon from '../SVGIcon/SVGIcon';

type CustomAlertProps = {
  severity: Severity;
  message: string;
};

const CustomAlert = ({ severity, message }: CustomAlertProps) => {
  const getBgColor = () => {
    switch (severity) {
      case 'error':
        return `bg-red-100 border border-red-300 text-red-950`;
      case 'success':
        return `bg-green-100 border border-green-300`;
      case 'warning':
        return `bg-yellow-100 border border-yellow-300`;
      default:
        return 'bg-blue-100 border border-blue-300';
    }
  };

  const getStrokeColor = () => {
    switch (severity) {
      case 'error':
        return `var(--color-red-800)`;
      case 'success':
        return `var(--color-emerald-700)`;
      case 'warning':
        return `var(--color-yellow-800)`;
      default:
        return 'var(--color-blue-600)';
    }
  };

  const bgColor = getBgColor();
  const strokeColor = getStrokeColor();

  return (
    <div
      className={`${bgColor} rounded w-full flex flex-row gap-2 items-center p-4 `}
    >
      <SVGIcon height='20' width='20' stroke={strokeColor}>
        <>
          <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path>
          <line x1='12' y1='9' x2='12' y2='13'></line>
          <line x1='12' y1='17' x2='12.01' y2='17'></line>
        </>
      </SVGIcon>
      {message}
    </div>
  );
};

export default CustomAlert;
