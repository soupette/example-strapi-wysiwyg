module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'daf488d4c7393e118396b10510b2f686'),
  },
});
