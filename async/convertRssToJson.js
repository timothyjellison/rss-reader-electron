const RssFeed = require('rss-to-json');

const convertRssToJson = (url) => new Promise((resolve, reject) => {
  RssFeed.load(url, (err, data) => {
    if (err) reject(err);

    resolve(data);
  });
});

module.exports = convertRssToJson;
