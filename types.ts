export type Page = 'home' | 'packages' | 'universities' | 'stories' | 'contact';

// Generic types for better type safety
export type ApiResponse<T> = {
  data: T;
  error?: Error;
  loading: boolean;
};

export type FormInputProps<T> = {
  value: T;
  onChange: (value: T) => void;
  reset: () => void;
};

// Extract function properties from type T
export type FunctionProperties<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

// Extract non-function properties from type T
export type NonFunctionProperties<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export interface Testimonial {
  id: number;
  name: string;
  course: string;
  university: string;
  image: string;
  quote: string;
  batch: string;
}

export interface University {
  id: number;
  name: string;
  location: string;
  type: 'Medical' | 'Dental' | 'Engineering' | 'Agriculture';
  features: string[];
  image: string;
}

export interface Course {
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
  text: string;
  isError?: boolean;
}