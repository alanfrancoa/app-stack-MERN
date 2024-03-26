import { useTasks } from "../context/TaskContext"
import { Link } from 'react-router-dom'

const TaskCard = ({ task }) => {
    const { deleteTask } = useTasks()
    return (
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md' key={task._id}>
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold ">{task.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <Link to={`/tasks/${task._id}`}>✏️</Link>
                    
                    <button onClick={() => {
                        deleteTask(task._id)
                    }}>🗑️</button>
                </div>
            </header>
            <p className="text-slate-300">{task.description}</p>
            <p>{new Date(task.date).toLocaleDateString()}</p>
        </div>
    )
}

export default TaskCard