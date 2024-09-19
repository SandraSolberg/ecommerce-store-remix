import { useEffect, useRef } from 'react';

const useClickOutside = (
  onClose: () => void,
  onHideDropdown: (event: KeyboardEvent) => void
) => {
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        ref.current &&
        !buttonRef.current?.contains(event.target as Node) &&
        !ref.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('click', handleClick, true);
    document.addEventListener('keydown', onHideDropdown, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('keydown', onHideDropdown, true);
    };
  }, [ref, onClose, onHideDropdown]);

  return { ref, buttonRef };
};

export default useClickOutside;
