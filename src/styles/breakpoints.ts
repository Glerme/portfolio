const size = {
  xs: '0px',
  sm: '320px',
  md: '768px',
  lg: '1200px',
};

export const breakpoints = {
  xs: `(min-width:${size.xs})`,
  sm: `(min-width:${size.sm})`,
  md: `(min-width:${size.md})`,
  lg: `(min-width:${size.lg})`,
};

// Antigo Breakpoints
// export const breakpoints = [
//   '@media(min-width: 425px)', !SM
//   '@media(min-width: 768px)', !MD
//   '@media(min-width: 1080px)', !LG
//   '@media(min-width: 1200px)',
// ];
