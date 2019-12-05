import React from "react";

const Item = ({ task }) => {
  return (
    <div className="item">
      <div className="title">{task.task}</div>
    </div>
  );
};

export default Item;
