import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext.jsx'

const RegisterPage = () => {
    const { register, handleSubmit } = useForm()
    const {signup, user} = useAuth()
    console.log(user)
    const onSubmit = async (values) => {
        await signup(values)
    }

    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('username', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Username'
                />
                <input type="email"{...register('email', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Email'
                />
                <input type="password" {...register('password', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='password'
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage