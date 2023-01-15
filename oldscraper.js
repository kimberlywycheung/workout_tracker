const HTMLParser = require('node-html-parser');
const axios = require('axios');
const fs = require('fs');

const scrape = async (url, cb) => {
  axios.get(`${url}`, {
    mode: 'no-cors',
    responseType: 'json',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  })
  .then(res => res.text())
  .then(body => HTMLParser.parse(body))
  .then(root => extractData(root))
  .then(data => cb(data))
  .catch(err => console.log(err));
};

module.exports = scrape;

scrape('https://www.youtube.com/watch?v=sKyYyeFl6lo&ab_channel=CarolineGirvan');
scrape('https://www.youtube.com/watch?v=giSo0qQIscE&ab_channel=YogaWithAdriene', () => {});
scrape('https://www.youtube.com/watch?v=l9DPeGeWNYY&ab_channel=Raddy');

const extractData = (root) => {
  // Extract
  const htmlBody = root.querySelector('body').toString();
  console.log('htmlbody', htmlBody);

  // Transform
  const htmlBodyArr = htmlBody.split('\n')[0];
  const startIndex = htmlBodyArr.indexOf('videoDetails');
  const stopIndex = htmlBodyArr.lastIndexOf("}");
  const videoDetailsString = '{' + htmlBodyArr.slice(startIndex - 1, stopIndex + 1);
  const videoObj = JSON.parse(videoDetailsString);
  const videoDetails = videoObj.videoDetails;
  const videoData = {
    title: videoDetails.title,
    author: videoDetails.author,
    length: videoDetails.lengthSeconds,
    keywords: videoDetails.keywords,
    thumbnail: videoDetails.thumbnail.thumbnails[0].url
  }

  // Load
  fs.writeFile(
    'scrappeddata.json', JSON.stringify(videoData), function(err) {
        if (err) throw err;
        console.log('successfully saved file');
    }
  );

  return videoData;
};