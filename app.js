import { argv }         from './config/yargs.js';
import { guardarDB,
         leerDB
       }                from './helpers/guardarArchivo.js';
import { inquirerMenu, 
         pausa,
         leerInput
       }                from './helpers/inquirer.js';
import { Procesos }     from './models/procesos.js';
 
console.clear();
 
const main = async () => {
//   console.log('process.argv:', process.argv);
//   console.log('argv:', argv);
//   console.log('argv.base:', argv.base);
  
  let opt = '';
  const procesos   = new Procesos();
  const procesosDB = leerDB();
  if ( procesosDB ) {
    procesos.cargarProcesosFromArray( procesosDB );
  }

  do {
    opt = await inquirerMenu();
    switch ( opt ) {
      case '1':
        const desc = await leerInput( 'Descripción del proceso:' );
        procesos.crearProceso( desc );
        break;

      case '2':
        console.log( procesos.listadoCompleto() );
        break;
    }

    guardarDB( procesos.listadoArr );
    await pausa();
  } while ( opt !== '0' );
};
 
main();
