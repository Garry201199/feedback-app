import { motion, AnimatePresence } from "framer-motion"
import React, { useState } from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ data, reverse ,editMode,handleDelete , editFeedback }) => {  
  


  return (
    <div className="feedback-list">
      <AnimatePresence>
        {data &&
        data.map((i, key) => (
          <motion.div key={i.id} 
          initial= { {opacity: 0 }}
          animate={{opacity:1}} 
          exit={{opacity:0}}>

          <FeedbackItem reverse={reverse}  
          editMode={editMode}
          handleDelete={handleDelete} 
          editFeedback={editFeedback}  
          item={i} />

          </motion.div>
        ))}
      </AnimatePresence>
      
    </div>
  );
};

export default FeedbackList;
