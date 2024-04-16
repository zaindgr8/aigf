export function slideInFromLeft(delay = 0, duration = 0.5) {
  return {
    variants: {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: duration,
        },
      },
    },
    viewport: { once: true },
    initial: "hidden",
    whileInView: "visible",
  };
}

export function slideInFromRight(delay = 0, duration = 0.5) {
  return {
    variants: {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: duration,
        },
      },
    },
    viewport: { once: true },
    initial: "hidden",
    whileInView: "visible",
  };
}

export function slideInFromTop(delay = 0, duration = 0.5) {
  return {
    variants: {
      hidden: { y: -100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: duration,
        },
      },
    },
    viewport: { once: true },
    initial: "hidden",
    whileInView: "visible",
  };
}

export function slideInFromBottom(delay = 0, duration = 0.5) {
  return {
    variants: {
      hidden: { y: 100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: duration,
        },
      },
    },
    viewport: { once: true },
    initial: "hidden",
    whileInView: "visible",
  };
}

export function fadeIn(delay = 0, duration = 0.5) {
  return {
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delay: delay,
          duration: duration,
        },
      },
    },
    viewport: { once: true },
    initial: "hidden",
    whileInView: "visible",
  };
}
