import { getConnection, sql, querys } from "../database";

export const getAlumnos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllAlumnos)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const newAlumno = async (req, res) => {

    const { id_docente, nombre } = req.body

    if (nombre == null || id_docente == null ) {
        return res.status(400).json({ msg: "Peticion incorrecta, porfavor llena todos los campos" })
    }

    try {
        const pool = await getConnection();
        await pool.request()
            .input("id_docente", sql.Int, id_docente)
            .input("nombre", sql.VarChar, nombre)
            .query(querys.createAlumno);
        res.json({ id_docente, nombre })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const getAlumnosbyId = async (req, res)=>{
    const { id } = req.params;

    const pool = await getConnection()
    const result = await pool.request().input('id',id).query(querys.getAlumnobyId)
    res.send(result.recordset[0])
}

export const deleteAlumno = async (req, res)=>{
    const { id } = req.params;

    const pool = await getConnection()
    const result = await pool.request().input('id',id).query(querys.deleteAlumno)
    res.sendStatus(204)
}

export const getTotalAlumno = async (req, res)=>{
    const pool = await getConnection()
    const result = await pool.request().query(querys.getTotalAlummnos)
    res.json(result.recordset[0][''])
}

export const updateAlumno = async (req, res)=>{
    const { id_docente, nombre } = req.body
    const { id } = req.params
    if (id_docente == null || nombre == null) {
        return res.status(400).json({ msg: "Peticion incorrecta, porfavor llena todos los campos" })
    }

    const pool = await getConnection()
    await pool.request()
            .input("id_docente", sql.Int, id_docente)
            .input("nombre", sql.VarChar, nombre)
            .input("id_alumno", sql.Int, id)
            .query(querys.updateAlumno);
            
        res.json({ id_docente, nombre })

}