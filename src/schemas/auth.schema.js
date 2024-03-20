//zod, crea un esquema como mongoose, asi cuando llega los datos, se comparan con el schema de mongoose.
import { z } from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
    }),
    email: z
    .string({
        required_error: 'Email is required',
    })
    .email({
        required_error: 'Invalid Email',
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, {
        message: 'Password must be at least 6 characters',
    }),
})

export const loginSchema = z.object({
    email: z
        .string({
            required_error: 'Email is required',
        })
        .email({
            message: 'Email is not valid',
        }),
    password: z
        .string({
            required_error: 'Password is required',
        })
        .min(6, {
            message: 'Password must be at least 6 characters',
        })
})
