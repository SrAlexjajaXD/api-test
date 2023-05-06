import { Router } from "express";
import { getDocentes, newDocente, getDocentebyId, deleteDocente, getTotalDocentes, updateDocente } from "../controllers/docentes.controller";

const router = Router()

router.get('/docentes', getDocentes)

router.post('/docentes', newDocente)

router.get('/docentes/count', getTotalDocentes)

router.get('/docentes/:id',  getDocentebyId)

router.delete('/docentes/:id', deleteDocente)

router.put('/docentes/:id', updateDocente)



export default router