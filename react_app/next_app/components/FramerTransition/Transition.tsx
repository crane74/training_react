import { ReactElement } from "react";
import { motion } from "framer-motion";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

//ふわっと出現するアニメーション
export const AppearingSoftly = ({ children }: LayoutProps) => {
  return (
    <motion.div
      variants={{
        offscreen: {
          // 画面外の場合のスタイル
          y: 100,
          opacity: 0,
        },
        onscreen: {
          // 画面内の場合のスタイル
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.75,
          },
        },
      }}
      initial="offscreen" // 初期表示はoffscreen
      whileInView="onscreen" // 画面内に入ったらonscreen
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  );
};

//左から右に動くアニメーション
export const LeftToRight = ({ children }: LayoutProps) => {
  return (
    <motion.div
      animate={{
        x: 0,
        opacity: 1,
      }}
      initial={{
        x: -100,
        opacity: 0,
      }}
      exit={{
        x: 100,
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

//右から左に動くアニメーション
export const RightToLeft = ({ children }: LayoutProps) => {
  return (
    <motion.div
      animate={{
        y: 0,
        x: 0,
        opacity: 1,
      }}
      initial={{
        x: 100,
        opacity: 0,
      }}
      exit={{
        x: 100,
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
