import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]); // Initialize as an array
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() === "") return; // Prevent adding empty tasks
        setTasks([...tasks, newTask]);
        setNewTask("");
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index === 0) return; // Can't move the first task up
        const updatedTasks = [...tasks];
        [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
        setTasks(updatedTasks);
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List App</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange} // Use onChange instead of onClick
                />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button onClick={() => moveTaskUp(index)}>Move Up</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;