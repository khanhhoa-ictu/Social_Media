import { useEffect } from "react";

export const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, [ref, handler]);
  const test = (k: any, v: any) => {
    const data: any = {};
    data[k] = v;
    console.log(data);
    return v;
  };

  test("first", 1);
  test("second", 2);
  test("third", 1);
};
