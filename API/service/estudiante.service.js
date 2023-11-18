const pool = require('../libs/postgres.pool');

class estudiante {
    constructor(){
        this.pool = pool;
        this.pool.on('error', (err) => console.log(err));
    }

    async createProfile(Carrera,Experiencia,Habilidades) {

    }

    async editProfile(Carrera,Experiencia,Habilidades){
        
    }

}

module.exports = estudiante;