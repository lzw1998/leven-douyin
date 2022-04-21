const NODE_ENV = process.env.NODE_ENV || 'development';
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 3000;
const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json'];

module.exports = {
  NODE_ENV,
  SERVER_HOST,
  SERVER_PORT,
};
module.exports.moduleFileExtensions = moduleFileExtensions;
