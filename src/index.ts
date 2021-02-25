import React from "react";

export default function useLocalStorageState<T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = React.useState<T>(() => {
    const localStorageValue = localStorage.getItem(key);
    return localStorageValue ? JSON.parse(localStorageValue) : defaultValue;
  });

  React.useEffect(() => {
    if (state !== undefined) localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
