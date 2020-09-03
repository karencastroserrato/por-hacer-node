const fs = require('fs');
const { error } = require('console');
const { rejects } = require('assert');
const { resolve } = require('path');
//const { require } = require('yargs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Error de almacenamiento', err);
        /* if (err) reject(err)
        else
            resolve(`Los datos fueron almacenados`); */
    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
        console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;

    })
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })
    if (listadoPorHacer.length == nuevoListado.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true
    }
    guardarDB();

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}