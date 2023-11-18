const crypto = require('crypto');
const { config } = require('../config/config');

class Encryptor {
    constructor() {
        this.encryptKey = config.encryptioKey;
    }

    async encrypt(key) {
        const iv = crypto.randomBytes(16);
        let cipher = crypto.createCipheriv('aes-256-cbc',Buffer.from(this.encryptKey, 'hex'), iv);
        let encrypter = cipher.update(key);
        encrypter = Buffer.concat([encrypter, cipher.final()]);
        return { iv:iv.toString('hex'), encryptedData: encrypter.toString('hex') };
    }

    async decrypt(encryptedData) {
        console.log(encryptedData.usuiv);
        let iv = Buffer.from(encryptedData.usuiv, 'hex');
        let encryptedKey = Buffer.from(encryptedData.usucontrasena, 'hex');
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(this.encryptKey, 'hex'), iv);
        let decrypted = decipher.update(encryptedKey);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
}

module.exports = Encryptor;