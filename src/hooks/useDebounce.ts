import { useState, useEffect } from "react";

const useDebounce = <V extends unknown>(value: V, delay: number): V => {
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
