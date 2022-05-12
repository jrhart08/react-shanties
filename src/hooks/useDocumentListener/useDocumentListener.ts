import type { DependencyList } from 'react';
import useEventListener from '../useEventListener';

const useDocumentListener = (
  eventType: keyof DocumentEventMap,
  callback: (this: Document, ev: Event) => any,
  deps: DependencyList = [],
) => {
  useEventListener(
    document,
    eventType,
    callback,
    deps,
  );
};

export default useDocumentListener;
