const HTMLParser = require('node-html-parser');
const axios = require('axios');
const fs = require('fs');

const scrape = async (url, cb) => {
  await axios.get(`http://youtube.com/oembed?url=${url}&format=json`)
  .then(res => cb(res))
  .catch(err => console.log(err));
};

module.exports = scrape;