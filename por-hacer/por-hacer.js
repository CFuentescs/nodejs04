const fs = require('fs');


let listado = [];

const db = () => {

	let data = JSON.stringify(listado);

	fs.writeFile('db/data.json', data, (err) => {
		if (err) throw new Error('Error en escribir', err);
	});
}

const cargarDB = () => {
	try {
		listado = require('../db/data.json');
	}catch (error){
		listado=[];
	}	
	
}

const crear = (descripcion) => {

	cargarDB();

	let porHacer = {
		descripcion,
		completado: false
	}

	listado.push(porHacer);
	db();
	return porHacer;


}
const borrar = (descripcion) => {

	cargarDB();

	let index = listado.findIndex( tarea => tarea.descripcion === descripcion );

	if( index >= 0 ){

		listado.splice(index, 1);
		console.log(listado);
		db();
		
		return true;
	}else{
		return false;
	}

}

const actualizar = (descripcion, completado = true) => {

	cargarDB();

	let index = listado.findIndex( tarea => tarea.descripcion === descripcion );

	if( index >= 0 ){

		listado[index].completado = completado;
		db();
		return true;
	}else{
		return false;
	}
}

const getListado = () => {

	cargarDB();
	return listado;

}

module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}