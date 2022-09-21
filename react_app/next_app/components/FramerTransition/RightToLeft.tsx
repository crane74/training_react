import { ReactElement } from "react";
import { motion } from "framer-motion";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

//右から左に動くアニメーション
const RightToLeft = ({ children }: LayoutProps) => {
  return (
    <motion.div
      animate={{
        x: 0,
        opacity: 1,
      }}
      initial={{
        x: 100,
        opacity: 0,
      }}
      exit={{
        x: -100,
        opacity: 0,
      }}
      transition={{
        duration: 1.0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default RightToLeft;
