// Particles Options
export const particlesOptions = {
  particles: {
    number: {
      value: 15,
    },
    color: {
      value: ['#006666', '#686868'],
    },
    size: {
      value: 8,
    },
    line_linked: {
      color: '#686868',
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
