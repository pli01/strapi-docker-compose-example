module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'strapi-hook-mongoose',
      settings: {
        client: 'mongo',
        uri: env('DATABASE_URI', ''),
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'strapi-production'),
        username: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD' , ''),
      },
      options: {
        ssl: env('DATABASE_SSL', false),
        authenticationDatabase: env('DATABASE_AUTHENTICATION_DATABASE', ''),
      },
    },
  },
});
