import posed from 'react-pose';

const AnimatedIconLeft = posed.div ({
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 300,
      width: {type: 'spring', stiffness: 1000, damping: 15},
    },
  },
});

export default AnimatedIconLeft;
