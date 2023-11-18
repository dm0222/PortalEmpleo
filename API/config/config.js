require('dotenv').config();

const config = {
    env : process.env.NOD_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    encryptioKey: process.env.ENCRYPTION_KEY,
    jwtSecret: process.env.JWT_SECRET
}

module.exports = { config };