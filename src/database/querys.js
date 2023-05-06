export const querys = {
    getAllDocentes: "SELECT * FROM docentes",
    createDocente: 'insert into docentes (nombre, usuario, escuela, correo, contra) VALUES (@nombre, @usuario, @escuela, @correo, @contra)',
    getDocentebyId: 'select * from docentes where id_docente = @id',
    deleteDocente: 'delete from docentes where id_docente = @id',
    getTotalDocentes: 'select count(*) from docentes',
    updateDocente: 'update docentes set nombre=@nombre, usuario=@usuario, escuela=@escuela, correo=@correo, contra=@contra where id_docente = @id',

    getAllAlumnos: "SELECT * FROM alumnos",
    createAlumno: 'insert into alumnos (id_docente, nombre) VALUES (@id_docente, @nombre)',
    getAlumnobyId: 'select * from alumnos where id_alumno = @id',
    deleteAlumno: 'delete from alumnos where id_alumno = @id',
    getTotalAlummnos: 'select count(*) from alumnos',
    updateAlumno: 'update alumnos set id_docente=@id_docente, nombre=@nombre where id_alumno = @id_alumno',

}