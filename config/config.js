require('dotenv').config(); // Load environment variables

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    // dialect: process.env.DB_DIALECT,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "database_test",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_DATABASE,
    host: process.env.PROD_DB_HOST,
    // dialect: process.env.DB_DIALECT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
