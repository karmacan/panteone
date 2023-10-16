import {motion} from 'framer-motion';

export const AnimateHeight = ({
  children,
  style,
  isHidden,
  initialHeight = 0,
  duration = 0.2, // s
  delay = 0,
  type = 'spring'
}: TMotionProps) =>
  isHidden === undefined ? (
    <>{children}</>
  ) : (
    <motion.div
      style={{overflowY: 'hidden', ...style}}
      variants={{
        hide: {height: initialHeight},
        show: {height: 'auto'},
      }}
      initial='hide'
      animate={isHidden ? 'hide' : 'show'}
      transition={{duration, delay, type}}
    >
      {children}
    </motion.div>
  );