import { useState } from "react";
import { tasks } from "../data";
import Task from "./Task";
import { useEffect } from "react";

export default function TasksList() {
    let [currentTasks, setCurrentTasks] = useState(tasks);
    let [newTask, setNewTask] = useState('');


    return (
        <>
            Task name:<input onChange={(e) => { setNewTask(e.target.value) }}></input>
            <button onClick={() => {
                setCurrentTasks([...currentTasks, {name:newTask}]);
                alert('new task added');
            }}>Add a new task</button>
            <br/>

            Current tasks:
            <ul>
                {
                   currentTasks.map((task) => { return <Task name={task.name}></Task>  })
                }
            </ul>
        </>

    );
}