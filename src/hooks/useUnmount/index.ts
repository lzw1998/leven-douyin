import { useEffect, useRef } from 'react';
import { isFunction } from 'src/utils';

function useUnmount(fn: () => void) {
  if (process.env.NODE_ENV === 'development') {
    if (!isFunction(fn)) {
      console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
    }
  }
  const fnRef = useRef(fn);
  useEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );
}
export default useUnmount;
