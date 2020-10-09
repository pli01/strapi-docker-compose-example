'use strict';

const axios = require('axios');

module.exports = {
  // GET /hello
  async index(ctx) {
    const { data } = await axios.get('https://hub.docker.com/v2/repositories/strapi/strapi/');
    return { data: data, count: data.pull_count, date: new Date() };
//    return 'Hello World!';
  },
};

