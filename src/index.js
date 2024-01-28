//arranca la aplicacion 

import app from './app.js'

import {connectDB} from './db.js'

connectDB() //inicia la coneccion a la base de datos
app.listen(3000)
console.log("Server on port", 3000)