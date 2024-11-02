import { useState, useEffect } from "react";

type UseDebounceHook = <T>(value: T, delay: number) => T;

const useDebounce: UseDebounceHook = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  });

  return debouncedValue;
};

export default useDebounce;
