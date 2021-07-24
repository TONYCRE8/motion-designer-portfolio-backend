module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 2412),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4378a81a8cd282e5625128a0265ea925'),
    },
  },
});
