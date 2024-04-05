/**
 * Custom hook for managing state in local storage.
 *
 * @param {string} key - The key to use for storing the value in local storage.
 * @param {*} initialValue - The initial value to use if no value is found in local storage.
 * @returns {Array} - An array containing the stored value and a function to update the stored value.
 */
/**
 * Custom hook for managing state in local storage.
 *
 * @param {string} key - The key to use for storing the value in local storage.
 * @param {*} initialValue - The initial value to use if no value is found in local storage.
 * @returns {Array} - An array containing the stored value and a function to update the stored value.
 */
import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}



