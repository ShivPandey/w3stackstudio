export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between child animations
    },
  },
};

export const fadeInLeft = (props: { delay: number; duration: number }) => ({
  hidden: { x: -10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: props.duration,
      ease: "easeOut",
      delay: props.delay,
    },
  },
});

export const fadeInBottom = (props: { delay: number; duration: number }) => ({
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: props.duration,
      ease: "easeOut",
      delay: props.delay,
    },
  },
});
