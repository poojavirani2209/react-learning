import { useState } from "react";
import { tasks } from "../data";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid';

export default function TasksList() {
    let [currentTasks, setCurrentTasks] = useState(tasks);
    let [newTask, setNewTask] = useState('');

    function handleCompleteness(id) {
        let updatedTasks = currentTasks.map((task) => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted;
            }
            return task;
        });

        setCurrentTasks(updatedTasks)
    }

    function handleDelete(id) {
        let updatedTasks = currentTasks.filter((task) => task.id !== id);
        setCurrentTasks(updatedTasks);
    }

    return (
        <>
            Task name:<input onChange={(e) => { setNewTask(e.target.value) }}></input>
            <button onClick={() => {
                setCurrentTasks([...currentTasks, { name: newTask, id: uuidv4(), isCompleted: false }]);
                setNewTask('');
            }}>Add a new task</button>
            <br />

            Current tasks:
            <ul>
                {
                    currentTasks.map((task) => { return <Task task={task} handleDelete={handleDelete} handleCompleteness={handleCompleteness}></Task> })
                }
            </ul>
        </>

    );
}