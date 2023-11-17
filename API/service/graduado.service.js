const pool = require('../libs/postgres.pool');

class graduado {
    constructor(){
        this.pool = pool;
        this.pool.on('error', (err) => console.log(err));
    }

}

module.exports = graduado;