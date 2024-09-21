type SVGIconType = {
  height?: string | number;
  width?: string | number;
  stroke?: string;
  fill?: string;
  children: JSX.Element;
};

const SVGIcon = ({
  height = '24',
  width = '24',
  stroke = 'var(--color-primary)',
  fill = 'none',
  children,
}: SVGIconType) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill={fill}
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      {children}
    </svg>
  );
};

export default SVGIcon;
