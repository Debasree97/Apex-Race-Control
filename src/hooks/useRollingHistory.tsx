import { useState } from "react";

export function useRollingHistory(value: number, windowSize = 30) {
  const [prevValue, setPrevValue] = useState(value);
  const [history, setHistory] = useState<number[]>(() => [value]);

  if (value !== prevValue) {
    setPrevValue(value);
    setHistory((prev) => {
      const next = [...prev, value];
      if (next.length > windowSize) next.shift();
      return next;
    });
  }

  return history;
}
