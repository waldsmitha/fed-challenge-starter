export const active = {
  show: {
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.5)",
    scale: 1.05,
    transition: { duration: 0.25 },
  },
  hide: {
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
    scale: 1,
    transition: { duration: 0.25 },
    rotate: 0,
  },
};

export const fadeIn = {
  show: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
  hide: {
    opacity: 0,
  },
};
