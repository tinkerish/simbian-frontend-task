import { AnimatePresence, motion } from "framer-motion";

export const AlertIcon = ({
  icon,
  isSimbian,
}: {
  icon: string;
  isSimbian: boolean;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className="text-2xl"
        initial={{ y: isSimbian ? 0 : -40 }}
        animate={{ y: 0 }}
        transition={{
          delay: isSimbian ? 0 : 1.1,
        }}
        exit={{ opacity: 0, scale: 0 }}
      >
        {icon}
      </motion.div>
    </AnimatePresence>
  );
};
