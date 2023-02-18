import React from "react";

function Task({ key, text, onDeleteTask }) {
  function  handleClick() {
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">{key}</div>
      <div className="text">{text}</div>
      <button 
      className="delete" 
      onClick={handleClick}
      className="delete">X</button>
    </div>
  );
}

export default Task;
