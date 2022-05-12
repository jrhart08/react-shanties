import type { RefObject } from 'react';
import { useState, useEffect } from 'react';
import { noop } from 'lodash';

// courtesy of https://www.webtips.dev/webtips/react-hooks/element-in-viewport
const useIntersection = (
  ref: RefObject<Element>,
  options?: IntersectionObserverInit,
) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const elem = ref.current;

    if (!elem) {
      return noop;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      options,
    );

    observer.observe(elem);

    return () => {
      observer.unobserve(elem);
      observer.disconnect();
    };
  }, [ref, options]);

  return isVisible;
};

export default useIntersection;
