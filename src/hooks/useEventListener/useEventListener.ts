/* eslint-disable react-hooks/exhaustive-deps */
import type { DependencyList } from 'react';
import { useEffect } from 'react';

type EventType<T> = T extends HTMLElement
  ? keyof HTMLElementEventMap
  : keyof DocumentEventMap;

const useEventListener = <T extends HTMLElement | Document>(
  elem: T | null | undefined,
  eventType: EventType<T>,
  callback: (this: T, ev: Event) => any,
  deps: DependencyList = [],
) => {
  useEffect(() => {
    elem?.addEventListener(eventType, callback);

    return () => {
      elem?.removeEventListener(eventType, callback);
    };
  }, [elem, eventType, ...deps]);
};

export default useEventListener;
