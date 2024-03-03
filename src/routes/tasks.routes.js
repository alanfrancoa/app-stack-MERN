import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js'
import {
    getTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask
} from '../controllers/tasks.controller.js'

const router = Router()
//CRUD
router.get('/tasks', authRequired, getTasks) //ver todos
router.get('/tasks/:id', authRequired, getTask)//ver uno solo por ID

router.post('/tasks', authRequired, createTask)//subir una tarea
router.delete('/tasks/:id', authRequired, deleteTask)//eliminar una tarea por ID
router.put('/tasks/:id', authRequired, updateTask) //actualizar uno solo por ID


export default router