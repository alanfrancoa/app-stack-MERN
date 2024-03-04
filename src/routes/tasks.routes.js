import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js'
import {
    getTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask
} from '../controllers/tasks.controller.js'
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";


const router = Router()
//CRUD
router.get('/tasks', authRequired, getTasks) //ver todos
router.get('/tasks/:id', authRequired, getTask)//ver uno solo por ID

router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask)//subir una tarea, primero verifica si esta autorizado, luego verifica la info enviada, si esta todo OK, se crea la tarea.  
router.delete('/tasks/:id', authRequired, deleteTask)//eliminar una tarea por ID
router.put('/tasks/:id', authRequired, updateTask) //actualizar uno solo por ID


export default router