/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export type PromiseHook<T> = [T | null, boolean];

const usePromise = <T>(
  factory: () => Promise<T>,
  deps: any[],
): PromiseHook<T> => {
  const [result, setResult] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    factory().then((response) => {
      setResult(response);
      setLoading(false);
    });
  }, deps);

  return [result, loading];
};

export default usePromise;
