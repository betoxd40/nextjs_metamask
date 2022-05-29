type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

const sizes: Record<Size, string> = {
  xxs: '400px',
  xs: '480px',
  sm: '600px',
  md: '768px',
  lg: '900px',
  xl: '1024px',
  xxl: '1200px',
  xxxl: '1366px'
};

export const theme = {
  fontFamily: 'Arboria',
  font: {
    size: {
      xs: '0.6875rem',
      sm: '0.75rem',
      base: '0.9375rem',
      lg: '1rem',
      xl: '1.25rem',
      xxl: '1.4375rem',
      xxxl: '2rem'
    },
    weight: {
      light: '300',
      book: '400',
      medium: '500',
      bold: '700',
      black: '900'
    }
  },
  rounded: {
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem'
  },
  colors: {
    black: '#191919',
    white: '#f2f2f2',
    primary: '#C84B31',
    secondary: '#2B2D3C'
  },
  breakpoint: (size: Size): string => `@media (max-width: ${sizes[size]})`
};

export type ThemeType = typeof theme;
