import { v4 as uuidv4 } from 'uuid';

class Proceso {
    id   = '';
    desc = ''

    constructor( desc ) {
        this.id   = uuidv4();
        this.desc = desc;
    }
}

export { 
    Proceso
};

