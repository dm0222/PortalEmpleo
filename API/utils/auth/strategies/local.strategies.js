const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const Encryptor = require('../../../utils/encryptor');
const encryptor = new Encryptor();

const systemService = require('../../../service/system.service');
const system = new systemService();

const localStrategy = new Strategy(async ( username, password, done) => {
    try {
        const user = await system.searchEmail(username);  
        if(user.length <= 0){
            done(boom.unauthorized(), false);
        }
        const encryptedData = user[0];
        console.log(user[0]);
        const pass = await encryptor.decrypt(encryptedData);

        if(password !== pass){
            done(boom.unauthorized(), false);
        }
        done(null,user);

    } catch (error) {
       done(error, false) 
    }

});


module.exports = localStrategy