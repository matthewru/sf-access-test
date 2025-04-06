// global.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'eclec-tech': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'api-key'?: string;
    };
  }
}
