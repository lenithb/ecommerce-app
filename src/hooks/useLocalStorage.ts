import { useEffect, useState } from "react";

// hook genérico para persistir estado en localStorage
export function useLocalStorage<T>(key: string, initialValue: T) {
  // lee el valor guardado al montar (useState con función)
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) return JSON.parse(raw) as T;
    } catch {
      return initialValue;
    }
    return initialValue;
  });

  // guardar en localStorage cada vez que cambie `value`
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
