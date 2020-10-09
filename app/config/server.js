module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: {
    enabled: false
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e58255cb4e2652755d8e5c879854c56d'),
    },
  },
});
