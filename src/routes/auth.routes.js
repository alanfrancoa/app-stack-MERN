//Llamo a express para crear el enrutador

import { Router } from "express"
import { login, register } from "../controllers/auth.controller.js"


const router = Router()

router.post('/register', register)
router.post('/login', login)

//cuando haga un post a register o login, cada cual llamara a la funcion almacenada en auth.controller.js

export default router