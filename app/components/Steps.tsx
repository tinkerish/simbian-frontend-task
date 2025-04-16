import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

export const stepVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};
export const pathVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const Steps = ({ steps }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps]);
  return (
    <div className="my-16 relative flex-1/3">
      <div className="absolute right-[20%] top-0 h-full -translate-x-1/2 w-px bg-white z-0 flex flex-col justify-between items-center">
        <motion.div
          className="absolute top-0 h-full w-full bg-white"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          {" "}
        </motion.div>
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute -bottom-1.5`}
          style={{
            left: "priya",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 90 }}
        >
          <motion.path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>
      </div>
      <div
        className={`flex flex-col items-end space-y-24 z-10 absolute right-[18%] max-xl:right-[17%] max-[900px]:right-[16%] max-md:right-[15%]`}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            custom={index}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col items-end text-black`}
          >
            <div className="flex justify-center">
              <motion.div
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white
                ${currentStepIndex === index ? " " : ""}`}
                animate={
                  currentStepIndex === index
                    ? {
                        scale: [1, 1.2, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  repeat: currentStepIndex === index ? Infinity : 0,
                }}
              >
                <span className="text-xl">{step.icon}</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className={`flex flex-col space-y-24 relative z-10 gap-8 w-fit`}>
        {steps.map((step) => {
          return (
            <div
              key={step.id}
              className={`m-auto 2xl:w-10/12  max-[1344px]:m-0 w-7/12 border border-solid p-4 rounded-xl text-white bg-white/10 flex gap-2 items-center`}
            >
              <div className="bg-white/12 rounded w-fit p-1">{step.image}</div>
              <div>
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-blue-200">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
