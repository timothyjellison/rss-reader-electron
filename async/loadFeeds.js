const convertRssToJson = require('./convertRssToJson');
const FeedDigest = require('../components/FeedDigest');

module.exports = (feeds) => {
  return Promise
  .all(feeds
    .map(feed => feed.url)
    .map(url => convertRssToJson(url))
  )
  .then(feeds => {
    const app = document.getElementById('app');

    feeds.forEach((feed, index) => {
      app.appendChild(FeedDigest(feed, index));
    });
  })
  .catch(e => console.error(e));
};
