import { Router } from "express";
import { getAlumnos, newAlumno, getAlumnosbyId, deleteAlumno, getTotalAlumno, updateAlumno } from "../controllers/alumnos.controller";

const router = Router()

router.get('/alumnos', getAlumnos)

router.post('/alumnos', newAlumno)

router.get('/alumnos/count', getTotalAlumno)

router.get('/alumnos/:id',  getAlumnosbyId)

router.delete('/alumnos/:id', deleteAlumno)

router.put('/alumnos/:id', updateAlumno)



export default router