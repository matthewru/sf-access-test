// global.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'eqlec-tech': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'api-key'?: string;
    };
  }
}
