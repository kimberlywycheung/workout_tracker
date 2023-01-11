const HTMLParser = require('node-html-parser')
const fs = require('fs')
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const scraper = async (url) => {
  await fetch(`${url}`)
  .then(res => res.text())
  .then(body => extractData(HTMLParser.parse(body)))
};

scraper('https://www.youtube.com/watch?v=sKyYyeFl6lo&ab_channel=CarolineGirvan')

const extractData = (root) => {
  // Extract
  const htmlBody = root.querySelector('body').innerHTML;

  // Transform
  const htmlBodyArr = htmlBody.split('\n')[0];

  const startIndex = htmlBodyArr.indexOf('videoDetails');
  const stopIndex = htmlBodyArr.lastIndexOf("}");
  const videoDetailsString = '{' + htmlBodyArr.slice(startIndex - 1, stopIndex + 1);
  const videoObj = JSON.parse(videoDetailsString);

  const videoDetails = videoObj.videoDetails;

  // console.log(videoDetails.title);
  // console.log(videoDetails.author);
  // console.log(videoDetails.lengthSeconds);
  // console.log(videoDetails.keywords);
  // console.log(videoDetails.thumbnail.thumbnails[0].url);

  const videoData = {
    title: videoDetails.title,
    author: videoDetails.author,
    length: videoDetails.lengthSeconds,
    keywords: videoDetails.keywords,
    thumbnail: videoDetails.thumbnail.thumbnails[0].url
  }
  console.log(videoData);
  return videoData;

  // USED FOR VALIDATING DATA
  // fs.writeFile(
  //   'scrappeddata.json', JSON.stringify(videoDetails), function(err) {
  //       if (err) throw err;
  //       console.log('successfully saved file');
  //   }
  // );
};

module.exports = scraper;