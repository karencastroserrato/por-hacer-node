const descripcion = {
    alias: 'd',
    demand: true,
    decrip: "Realiza una descripcion de la nota"
}
const completado = {
    alias: 'c',
    default: true,
    decrip: "Tarea completada"
}
const argv = require('yargs')
    .command('crear', 'crear una nota 1', {
        descripcion
    })
    .command('listar', 'listar las notas 1', {
        descripcion,
        completado
    })
    .command('actualizar', 'Actualiza las notas', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra las notas', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv,
}