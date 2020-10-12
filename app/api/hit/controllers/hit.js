'use strict';

const axios = require('axios');
// Bug in axios https over http_proxy https://janmolak.com/node-js-axios-behind-corporate-proxies-8b17a6f31f9d
// Dirty fix: must use http_proxy and parse hostname and port
//   use tunnel.httpsOverHttp
const tunnel = require('tunnel');

module.exports = {
  // GET /hits
  async index(ctx) {

   // use httpsoverhttp custom strapi function
   const agent = strapi.config.functions.httpsOverHttp();
  
   const { data } = await axios.get('https://hub.docker.com/v2/repositories/strapi/strapi/', { proxy: false, httpsAgent: agent } );

  return { data: data, count: data.pull_count, date: new Date() };
//    return 'Hello World!';
  },
};

