import { useEffect, useState } from "react";
import { watchDataType } from "../types";

export default function useLocalStorage(key: string) {
  const [storedValue, setStoredValue] = useState<watchDataType[]>(() =>
    JSON.parse(localStorage.getItem(key) || "[]")
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);
  return { storedValue, setStoredValue };
}
