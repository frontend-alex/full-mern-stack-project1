import React, { useEffect } from "react";

const Complition = ({ setCart }) => {
  useEffect(() => {
    setCart([]);
  }, []);
  return (
    <div className="complition-container">
      <h1>Succesfully bought the items 🎉</h1>
    </div>
  );
};

export default Complition;
