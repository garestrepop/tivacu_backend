require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};

const auth0 = {
  jwksUri: process.env.JWKSURI,
  audience: process.env.AUDIENCE,
  issuer: process.env.ISSUER,
};

module.exports = {
  config,
  auth0,
};
