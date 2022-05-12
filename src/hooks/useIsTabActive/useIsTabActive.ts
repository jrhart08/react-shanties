import { useState } from 'react';
import useDocumentListener from '../useDocumentListener';

const useIsTabActive = (): boolean => {
  const [isActive, setIsActive] = useState(!document.hidden);

  useDocumentListener('visibilitychange', () => {
    setIsActive(!document.hidden);
  }, []);

  return isActive;
};

export default useIsTabActive;
