
export default function Task({ task, handleDelete, handleCompleteness }) {
    return (
        <>
            <li>{task.name}</li>
            <input type="checkbox" checked={task.isCompleted} onChange={() => { handleCompleteness(task.id) }} />
            <button onClick={()=>{handleDelete(task.id)}}>Delete task</button>
        </>
    );
}