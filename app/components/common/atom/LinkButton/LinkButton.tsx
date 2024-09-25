type LinkButtonProps = {
  title: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  className?: string;
};

const LinkButton = ({ title, type, onClick, className }: LinkButtonProps) => {
  return (
    <button
      className={`text-blue-600 text-base font-semibold hover:underline underline-offset-2 ${className}`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default LinkButton;
