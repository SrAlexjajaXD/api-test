import { getConnection, sql, querys } from "../database";

export const getDocentes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllDocentes)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const newDocente = async (req, res) => {

    const { nombre, usuario, escuela, correo, contra } = req.body

    if (nombre == null || usuario == null || escuela == null || correo == null || contra == null) {
        return res.status(400).json({ msg: "Peticion incorrecta, porfavor llena todos los campos" })
    }

    try {
        const pool = await getConnection();
        await pool.request()
            .input("nombre", sql.VarChar, nombre)
            .input("usuario", sql.VarChar, usuario)
            .input("escuela", sql.VarChar, escuela)
            .input("correo", sql.VarChar, correo)
            .input("contra", sql.VarChar, contra)
            .query(querys.createDocente);
        res.json({ nombre, usuario, escuela, correo, contra })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const getDocentebyId = async (req, res)=>{
    const { id } = req.params;

    const pool = await getConnection()
    const result = await pool.request().input('id',id).query(querys.getDocentebyId)
    res.send(result.recordset[0])
}

export const deleteDocente = async (req, res)=>{
    const { id } = req.params;

    const pool = await getConnection()
    const result = await pool.request().input('id',id).query(querys.deleteDocente)
    res.sendStatus(204)
}

export const getTotalDocentes = async (req, res)=>{
    const pool = await getConnection()
    const result = await pool.request().query(querys.getTotalDocentes)
    res.json(result.recordset[0][''])
}

export const updateDocente = async (req, res)=>{
    const { nombre, usuario, escuela, correo, contra } = req.body
    const { id } = req.params
    if (nombre == null || usuario == null || escuela == null || correo == null || contra == null) {
        return res.status(400).json({ msg: "Peticion incorrecta, porfavor llena todos los campos" })
    }

    const pool = await getConnection()
    await pool.request()
            .input("nombre", sql.VarChar, nombre)
            .input("usuario", sql.VarChar, usuario)
            .input("escuela", sql.VarChar, escuela)
            .input("correo", sql.VarChar, correo)
            .input("contra", sql.VarChar, contra)
            .input("id", sql.Int, id)
            .query(querys.updateDocente);
            
        res.json({ nombre, usuario, escuela, correo, contra })

}