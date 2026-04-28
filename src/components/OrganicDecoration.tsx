import { motion } from 'motion/react';

export const OrganicDecoration = () => (
  <div className="absolute inset-0 pointer-events-none opacity-40">
    <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <motion.path 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        d="M-50,200 Q200,100 400,250 T800,150 T1100,300" 
        stroke="#C68A12" 
        strokeWidth="1" 
        fill="none" 
        strokeOpacity="0.2"
      />
      <motion.path 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, ease: "easeInOut", delay: 1 }}
        d="M-100,500 Q250,700 500,500 T1100,600" 
        stroke="#C68A12" 
        strokeWidth="1" 
        fill="none" 
        strokeOpacity="0.1"
      />
    </svg>
  </div>
);
