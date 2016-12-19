require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
    }
  },
  production: {
    client: 'pg',

    connection: process.env.DATABASE_URL + "?ssl=true"
  }

};
