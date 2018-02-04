const ArticleList = require('./ArticleList');

const FeedDigest = (feed, index) => {
  const feedDigest = document.createElement('div');
  feedDigest.id = `feedDigest${index}`;
  const header = document.createElement('h2');
  header.innerHTML = feed.title;
  feedDigest.appendChild(header);
  feedDigest.appendChild(ArticleList(feed));

  return feedDigest;
};

module.exports = FeedDigest;