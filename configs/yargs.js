const opts_crear = {
	descripcion: {
		alias: 'd',
		demand: true,
		desc: 'Descripcion de la tarea por hacer'
	}
}

const opts_actualizar = {
	descripcion: {
		alias: 'd',
		demand: true,
		desc: 'Descripcion de la tarea por hacer'
	},
	completado:{
		alias: 'c',
		default: true,
		desc: 'Completado de la tarea'
	}
}

const argv = require('yargs')
	.command ('crear', 'imprime en consola la tabla de multiplicar',opts_crear)
	.command ('borrar', 'imprime en consola la tabla de multiplicar',opts_crear)
	.command ('actualizar', 'crea en txt la tabla de multiplicar',opts_actualizar)
	.help().argv;

	module.exports = {
		argv
	}