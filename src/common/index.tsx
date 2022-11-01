import { useEffect } from "react";

export const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, [ref, handler]);
};
