declare module '*.pdf' {
  const content: string;
  export default content;
}

type FacebookPixelFn = ((...args: any[]) => void) & {
  queue: unknown[];
  push?: (...args: any[]) => void;
  loaded: boolean;
  version: string;
  callMethod?: (...args: any[]) => void;
};

interface Window {
  fbq?: FacebookPixelFn;
  _fbq?: FacebookPixelFn;
}
  