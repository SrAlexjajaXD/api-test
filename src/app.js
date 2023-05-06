import express from "express";
import config from "./config";
import docentesRoutes from './routes/docentes.routes'
import alumnosRoutes from './routes/alumnos.routes'

const app = express()

app.set('port', config.port)

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(docentesRoutes)
app.use(alumnosRoutes)


export default app