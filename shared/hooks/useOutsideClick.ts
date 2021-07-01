import { MutableRefObject, useEffect } from 'react';

type Props = {
  ref: MutableRefObject<HTMLDivElement>;
  fun: () => void;
};

export default function useOutsideClick({ ref, fun }: Props) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        fun();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
