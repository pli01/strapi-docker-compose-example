module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        uri: env('DATABASE_URI', ''),
        database: env('DATABASE_NAME', 'strapi'),
      },
      options: {
        ssl: env('DATABASE_SSL', false),
        authenticationDatabase: env('DATABASE_AUTHENTICATION_DATABASE', ''),
      },
    },
  },
});
