const ArticleLink = require('./ArticleLink');

const ArticleList = (feed) => {
  const articleList = document.createElement('ul');

  feed.items.forEach(item => {
    const articleListItem = document.createElement('li');
    articleListItem.appendChild(ArticleLink(item));
    articleList.appendChild(articleListItem);
  });

  return articleList;
};

module.exports = ArticleList;
