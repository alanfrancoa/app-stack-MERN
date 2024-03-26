import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext'
import {useNavigate} from 'react-router-dom'

const TaskFormPage = () => {
  const { register, handleSubmit } = useForm()
  const { tasks, createTask } = useTasks()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    createTask(data)
    navigate('/tasks')

  })

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Title'
          {...register('title')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
        />
        <textarea rows="10" placeholder='Description'
          {...register('description')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        />
        <button>Save</button>
      </form>
    </div>
  )
}

export default TaskFormPage