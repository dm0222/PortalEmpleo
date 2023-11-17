const pool = require('../libs/postgres.pool');

class system {
    constructor(){
        this.pool = pool;
        this.pool.on('error', (err) => console.log(err));
    }

}

module.exports = system;