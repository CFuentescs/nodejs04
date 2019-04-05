const argv = require('./configs/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer'); 

let comando = argv._[0];

switch (comando) {

	case 'crear':
		let tarea = porHacer.crear(argv.descripcion);
		console.log(tarea);
	break;

	case 'listar':

		let listado = porHacer.getListado();
		console.log('===== por hacer ====='.green);
		for ( let tarea of listado){
			console.log('descripcion:', tarea.descripcion.green);
			if(!tarea.completado)
				console.log('EStado:', colors.red(tarea.completado));
			else
				console.log('EStado:', colors.green(tarea.completado));

		}
		console.log('====================='.green);
	break;

	case 'actualizar':

		let actualizador = porHacer.actualizar(argv.descripcion, argv.completado);

		console.log(`actualizar dato ${argv.descripcion} con ${ actualizado}`);

	break;

	case 'borrar':
		let borrado = porHacer.borrar(argv.descripcion);
		console.log(borrado);
	break;
	default:
		console.log('comando no reconocido');
}