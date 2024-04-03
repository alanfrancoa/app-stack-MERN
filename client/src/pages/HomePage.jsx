import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-100px)] items-center justify-center'>
      <h1 className='text-3xl font-bold mb-4'>Task Manager</h1>
      <div className='text-center'>
        <p>Keep your daily tasks organized with ease.</p>
        <p>Please <Link to='/login' className="text-indigo-500">log in</Link> or <Link to='/register' className="text-indigo-500">sign up</Link> to continue.</p>
      </div>

    </div>
  )
}

export default HomePage