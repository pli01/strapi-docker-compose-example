const axios = require('axios');

module.exports = async () => {
  const { data } = await axios.get('https://hub.docker.com/v2/repositories/strapi/strapi/');

  await strapi.query('hit').create({
    date: new Date(),
    count: data.pull_count,
  });
};

