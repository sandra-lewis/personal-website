// Particles Options
export const particlesOptions = {
  particles: {
    number: {
      value: 15,
    },
    color: {
      value: ['#015069', '#606060'],
    },
    size: {
      value: 12,
    },
    line_linked: {
      color: '#909090',
    },
    move: {
      speed: 3.25,
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};
