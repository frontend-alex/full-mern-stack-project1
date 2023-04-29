import React from "react";

const CatalogCard = ({ card }) => {
  return (
    <div className="post">
      <div className="post-items">
        <img src="https://images.pexels.com/photos/16511744/pexels-photo-16511744.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
        <div className="post-text">
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non
            tempore dolor vitae velit corrupti, amet molestias alias incidunt, a
            harum eum facere modi qui impedit, esse sapiente doloribus ratione.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
