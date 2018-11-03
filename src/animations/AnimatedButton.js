import posed from 'react-pose';

const AnimatedButton = posed.div ({
  visible: {
    width: 300,
    transition: {duration: 500},
  },
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 300,
      width: {type: 'spring', stiffness: 1000, damping: 15},
    },
  },
});

export default AnimatedButton;
