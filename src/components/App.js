import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({ CATEGORIES });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  function handleDeleteTask() {

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList 
      tasks={TASKS}
      onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
