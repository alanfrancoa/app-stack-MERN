import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext'

const TaskFormPage = () => {
  const { register, handleSubmit } = useForm()
  const { tasks, createTask } = useTasks()
  console.log(tasks)

  const onSubmit = handleSubmit((data) => {
    createTask(data)
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