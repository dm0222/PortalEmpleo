const Encryptor = require('../utils/encryptor');
const pool = require('../libs/postgres.pool');
const encryptor = new Encryptor();

class system {
    constructor(){
        this.pool = pool;
        this.pool.on('error', (err) => console.log(err));
    }

    async systemRegister(type,Nombre,Apellido,Email,Contrasena){
        const tipo = type.toLowerCase();
        let usuid = await this.systemRegisterUser(Email,Contrasena,tipo);
        const values = [Nombre,Apellido,usuid[0].usuid];
        switch(tipo){
            case 'estudiante':
                var query ='INSERT INTO estudiante(estnombre,estapellido,estusuario) VALUES ($1,$2,$3)';
                await this.pool.query(query,values);
            break;
            case 'graduado':
                var query ='INSERT INTO graduado(granombre,graapellido,grausuario) VALUES ($1,$2,$3)';
                await this.pool.query(query,values);
            break;
        }
    }

    async systemRegisterUser(Email,Contrasena,Type){
        const { iv ,encryptedData } = await encryptor.encrypt(Contrasena.toString());
        const values = [Email,encryptedData,iv,Type];
        const query ='INSERT INTO usuario(usucorreo,usucontrasena,usuiv,usutipo) VALUES ($1,$2,$3,$4) RETURNING usuid';
        const usuid = await this.pool.query(query,values);
        console.log(usuid);
        return usuid.rows;
    }

    async systemRegisterEmpresa(Nombre,Email,Contrasena){
        let usuid = await this.systemRegisterUser(Email,Contrasena,'empresa');
        const values = [Nombre,usuid[0].usuid];
        const query ='INSERT INTO empresa (empnombre,empusuario) VALUES ($1,$2)';
        const rta = await this.pool.query(query,values);
        return rta;
    }

    async systemLogin(Email,Contrasena){
        const user = await this.searchEmail(Email);
    }

    async sendEmail(Email){

    }

    async searchEmail(Email){
        const values = [Email];
        const query = 'SELECT * FROM usuario WHERE usuCorreo = $1';
        const rta = await this.pool.query(query,values);
        return rta.rows;
    }
}

module.exports = system;