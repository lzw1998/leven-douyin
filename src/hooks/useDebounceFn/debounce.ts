type noop = (...args: any[]) => void;
function debounce(fn: noop, delay: number) {
  let timer: NodeJS.Timeout = null;

  function cancel() {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = null;
  }

  function debounced(...args: any[]) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(null, ...args);
    }, delay);
  }

  debounced.cancel = cancel;
  return debounced;
}

export default debounce;
