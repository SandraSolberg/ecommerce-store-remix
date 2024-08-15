import './approvalButtonGroup.css';

type Props = {
  className?: string;
  primaryBtnTitle?: string;
  secondaryBtnTitle?: string;
  onPrimaryBtn: () => void;
  onSecondaryBtn: () => void;
  approvalType: 'positive' | 'negative' | 'neutral';
};

const ApprovalButtonGroup = ({
  className,
  primaryBtnTitle = 'Approve',
  secondaryBtnTitle = 'Cancel',
  onPrimaryBtn,
  onSecondaryBtn,
  approvalType,
}: Props) => {
  return (
    <div className={`flex justify-center gap-2 ${className}`}>
      <button
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        className={`approvalBtn text-white ${approvalType}`}
        onClick={onPrimaryBtn}
      >
        {primaryBtnTitle}
      </button>
      <button
        className='approvalBtn border border-gray-400 hover:hover:bg-gray-200'
        onClick={onSecondaryBtn}
      >
        {secondaryBtnTitle}
      </button>
    </div>
  );
};

export default ApprovalButtonGroup;
