import { useState, useEffect, useCallback } from 'react';
import React from 'react';

export const useImageCarousel = (images: string[], interval: number = 4000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  return currentIndex;
};

interface FormInputState {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  reset: () => void;
}

export const useFormInput = (initialValue: string = ''): FormInputState => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return { value, onChange, reset };
};

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface UseAsyncOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useAsync = <T,>(
  asyncFunction: () => Promise<T>,
  immediate: boolean = true,
  options?: UseAsyncOptions
) => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: immediate,
    error: null,
  });

  const execute = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const response = await asyncFunction();
      setState({ data: response, loading: false, error: null });
      options?.onSuccess?.();
      return response;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setState({ data: null, loading: false, error: err });
      options?.onError?.(err);
      throw err;
    }
  }, [asyncFunction, options]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { ...state, execute };
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
