import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
export const ScrollReveal = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const easeInVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const refOne = useRef(null);

  const isInView = useInView(refOne, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={refOne}
      variants={easeInVariant}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.7, delay: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
