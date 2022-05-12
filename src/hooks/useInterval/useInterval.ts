/* eslint-disable react-hooks/exhaustive-deps */
import type { DependencyList } from 'react';
import { useEffect, useRef } from 'react';

const useInterval = (
  callback: () => unknown,
  ms: number,
  deps: DependencyList = [],
) => {
  const intervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    const interval = setInterval(callback, ms);

    intervalRef.current = interval;

    return () => {
      clearInterval(interval);
    };
  }, [callback, ms, ...deps]);

  return intervalRef.current;
};

export default useInterval;
