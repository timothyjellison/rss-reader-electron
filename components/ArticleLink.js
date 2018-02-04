const ArticleLink = (item) => {
  const articleLink = document.createElement('a');

  articleLink.href = item.url;
  articleLink.target = "_blank";
  articleLink.innerHTML = `${item.title}`;

  return articleLink;
};

module.exports = ArticleLink;