import { Severity } from '~/types/types';
import SVGIcon from '../SVGIcon/SVGIcon';

type CustomAlertProps = {
  severity: Severity;
  message: string;
  className?: string;
};

const CustomAlert = ({ severity, message, className }: CustomAlertProps) => {
  const getBgColor = () => {
    switch (severity) {
      case 'error':
        return `bg-red-100 border border-red-300 text-red-800`;
      case 'success':
        return `bg-green-100 border border-green-300 text-emerald-700`;
      case 'warning':
        return `bg-warning-100 border border-warning-300 text-warning-600`;
      default:
        return 'bg-blue-100 border border-blue-300 text-blue-600';
    }
  };

  const getStrokeColor = () => {
    switch (severity) {
      case 'error':
        return `var(--color-red-800)`;
      case 'success':
        return `var(--color-emerald-700)`;
      case 'warning':
        return `var(--color-warning-600)`;
      default:
        return 'var(--color-blue-600)';
    }
  };

  const getIconPath = () => {
    switch (severity) {
      case 'error':
        return (
          <>
            <circle cx='12' cy='12' r='10'></circle>
            <line x1='15' y1='9' x2='9' y2='15'></line>
            <line x1='9' y1='9' x2='15' y2='15'></line>
          </>
        );
      case 'success':
        return (
          <>
            <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
            <polyline points='22 4 12 14.01 9 11.01'></polyline>
          </>
        );
      case 'warning':
        return (
          <>
            <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path>
            <line x1='12' y1='9' x2='12' y2='13'></line>
            <line x1='12' y1='17' x2='12.01' y2='17'></line>
          </>
        );
      default:
        return (
          <>
            <circle cx='12' cy='12' r='10'></circle>
            <line x1='12' y1='16' x2='12' y2='12'></line>
            <line x1='12' y1='8' x2='12.01' y2='8'></line>
          </>
        );
    }
  };

  const bgColor = getBgColor();
  const strokeColor = getStrokeColor();

  return (
    <div
      className={`${bgColor} rounded w-full flex flex-row gap-2 items-center p-4 ${className}`}
    >
      <SVGIcon height='24' width='24' stroke={strokeColor}>
        {getIconPath()}
      </SVGIcon>

      {message}
    </div>
  );
};

export default CustomAlert;
