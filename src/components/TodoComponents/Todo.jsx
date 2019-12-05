import React from "react";

const Item = ({ task, toggleTask }) => {
  return (
    <div 
    onClick={e=>{toggleTask(task.id)}} 
    className={`task${task.completed ? " completed" : " pending"}`}>
      <div className="title">{task.task}</div>
    </div>
  );
};

export default Item;
