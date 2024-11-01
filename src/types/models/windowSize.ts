export type WindowSize = {
  width: number;
  height: number;
};

export type sizeByMedia = {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  '2xl'?: number;
  '3xl'?: number;
};

export type breakpoint = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
