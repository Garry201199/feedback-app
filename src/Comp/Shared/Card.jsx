import React from "react";

const Card = ({ children, reverse }) => {
  return <div className={reverse  ? 'card reverse': 'card'}
  
  >{children} </div>;
};

export default Card;
