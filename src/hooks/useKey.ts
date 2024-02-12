import { useEffect } from "react";

function useKey(KEY: string, action: () => void) {
  useEffect(() => {
    const onEscapeKey = (e: KeyboardEvent) => {
      if (e.code.toLowerCase() === KEY.toLowerCase()) action?.();
    };
    document.addEventListener("keydown", onEscapeKey);

    return () => {
      document.removeEventListener("keydown", onEscapeKey);
    };
  }, [action, KEY]);
}

export default useKey;
