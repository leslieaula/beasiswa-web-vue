require('dotenv').config();

module.exports = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  'process.env.VUE_ENV': '"server"',
  'process.env.SERVER': `"${process.env.SERVER}"`,
  'process.env.BASE_URI': `"${process.env.BASE_URI}"`,
};
