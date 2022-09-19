import type { NextPage } from "next";
import Link from "next/link";

import DropdownMenu from "@/components/elements/DropdownMenu";

import { motion } from "framer-motion";
import Counter from "@/components/elements/Counter";

const Home: NextPage = () => {
  return (
    <>
      <motion.div
        style={{ backgroundColor: "green", width: "300px", height: "300px" }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 50,
          bottom: 50,
        }}
      />
      <Counter />
    </>
  );
};

export default Home;
