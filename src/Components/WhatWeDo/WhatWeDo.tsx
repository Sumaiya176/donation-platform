import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const WhatWeDo = () => {
  return (
    <motion.div
      variants={parent}
      initial="hidden"
      // animate="visible"
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 2,
      }}
      className="grid grid-cols-2 gap-10 justify-center items-center"
    >
      <div>
        <img
          src="https://img.freepik.com/premium-vector/people-giving-charity-donation_258153-492.jpg?w=826"
          alt=""
        />
      </div>
      <div>
        <p className="text-4xl dark:text-white text-gray-600 font-medium">
          What We Do ?
        </p>

        <p className="my-6 dark:text-white text-slate-500 font-light text-2xl">
          UnityAid is a comprehensive post-disaster relief donation platform
          that connects donors, volunteers, and beneficiaries seamlessly.
          Through our user-friendly interface, donors can contribute funds,
          resources, or their time to support relief operations worldwide. We
          collaborate with trusted organizations and local partners on the
          ground to ensure that aid reaches those who need it most efficiently
          and effectively.
        </p>
      </div>
    </motion.div>
  );
};

export default WhatWeDo;
