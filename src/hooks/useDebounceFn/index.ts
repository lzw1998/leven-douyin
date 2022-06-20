import { useEffect, useMemo, useRef } from 'react';
import type { DebounceOptions } from '../types/debounceOptions';
import useUnmount from '../useUnmount';
import useLatest from '../useLatest';
import debounce from './debounce';

type noop = (...args: any[]) => any;

function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {
  // const fnRef = useLatest(fn);
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const delay = options?.wait ?? 200;

  const debounced = useMemo(
    () => debounce((...args: Parameters<T>): ReturnType<T> => fnRef.current(...args), delay),
    [],
  );

  useUnmount(() => {
    debounced.cancel();
  });
  return {
    run: debounced,
    cancel: debounced.cancel,
  };
}

export default useDebounceFn;
