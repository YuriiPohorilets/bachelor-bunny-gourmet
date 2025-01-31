export const duration = {
  xs: 0.1,
  sm: 0.2,
  md: 0.3,
  lg: 0.6,
  xl: 1,
};

export const easing = {
  common: 'easeInOut',
};

export const animation = {
  fadeDown: (value: [number | string, number | string, number | string]) => ({
    initial: { y: value[0], opacity: 0 },
    animate: { y: value[1], opacity: 1 },
    exit: { y: value[2], opacity: 0 },
  }),
};
