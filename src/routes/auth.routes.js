//Llamo a express para crear el enrutador

import { Router } from "express"
import { login, logout, register, profile } from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js"


const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/profile', authRequired, profile)


//cuando haga un post a register o login, cada cual llamara a la funcion almacenada en auth.controller.js

export default router