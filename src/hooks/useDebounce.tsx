import { useEffect, useState } from 'react';

export function useDebounce(value: string, delay: number): string {
  const [debounce, setDebounce] = useState<string>('');

  useEffect(() => {
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounce;
}
