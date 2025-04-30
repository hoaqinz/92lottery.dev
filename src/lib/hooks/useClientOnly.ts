"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to ensure components only render on the client side
 * This prevents hydration mismatches by not rendering anything during SSR
 */
export function useClientOnly<T>(initialValue: T): [T, boolean] {
  const [value, setValue] = useState<T>(initialValue);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return [value, isMounted];
}

/**
 * Custom hook to ensure data is only generated on the client side
 * @param dataFn Function that generates data (should only run on client)
 */
export function useClientData<T>(dataFn: () => T): [T | null, boolean] {
  const [data, setData] = useState<T | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setData(dataFn());
  }, [dataFn]);

  return [data, isMounted];
}
