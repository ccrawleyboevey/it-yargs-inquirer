import { Proceso } from "./proceso.js";

class Procesos {
    _listado = {};

    get listadoArr() {
        const listado = [];
        // Object: devuelve un listado de llaves
        Object.keys(this._listado).forEach( key => {
            const proceso = this._listado[key];
            listado.push( proceso );
        })

        return listado;
    }

    constructor() {
        this._listado = {}
    }

    crearProceso( desc = '' ) {
        const proceso = new Proceso( desc );
        this._listado[proceso.id] = proceso;
    }

    cargarProcesosFromArray( procesos ) {
        procesos.forEach( proceso => {
            this._listado[proceso.id] = proceso;
        })
    }

    listadoCompleto() {
        this.listadoArr.forEach( (proceso, i ) => {
            const idx = `${i + 1}`.green;
            const { desc } = proceso;
            console.log(`${ idx } ${ desc }`);
        });
    }
}

export { Procesos }