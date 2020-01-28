require('dotenv').config();

module.exports = {
  development: {
    database: 'antecipag',
    username: 'development',
    password: 'finnet10@',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    database: 'antecipag_test',
    username: 'development',
    password: 'finnet10@',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  ci_test: {
    database: 'antecipag_test',
    username: 'development',
    password: 'finnet10@',
    host: 'postgres',
    dialect: 'postgres'
  },

  staging: {
    database: 'antecipag_staging',
    username: 'antecipag',
    password: 'finnet10@',
    host: 'antecipag-staging.czrx9cvzgr1z.sa-east-1.rds.amazonaws.com',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
