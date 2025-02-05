import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter(task => task.text !== deletedTaskText));
  }

  function handleAddTask(addedTaskText) {
    setTasks([...tasks, addedTaskText]);
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
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={handleAddTask}/>
      <TaskList 
      tasks={visibleTasks}
      onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
