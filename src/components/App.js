import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({ CATEGORIES });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDeleteTask() {

  }

  const visibleTasks = tasks
  .filter(task => category === "All" || task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      onSelectCategory={setCategory}
      selectedCategory={category}/>
      <NewTaskForm />
      <TaskList 
      tasks={visibleTasks}
      onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
