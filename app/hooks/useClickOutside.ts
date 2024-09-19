import { useEffect, useRef } from 'react';

const useClickOutside = (
  onClose: () => void,
  handleHideDropdown: (event: KeyboardEvent) => void
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClick, true);
    document.addEventListener('keydown', handleHideDropdown, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('keydown', handleHideDropdown, true);
    };
  }, [ref, onClose, handleHideDropdown]);

  return ref;
};

export default useClickOutside;
