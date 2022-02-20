const md = require(`markdown-it`);

const mdOptions = {
  html       : true,
  quotes     : `“”‘’`,
  typographer: true,
};

const mdParser = md(mdOptions);

module.exports = function(config) {

  config.addPassthroughCopy(`bibliography/bibliography.js`);
  config.addPassthroughCopy(`favicon.ico`);
  config.addPassthroughCopy(`images`);
  config.addPassthroughCopy({ 'layouts/main.css': `index.css` });
  config.setLibrary(`md`, mdParser);

  return {
    dir: {
      data   : `data`,
      input  : `.`,
      layouts: `layouts`,
      output : `dist`,
    },
    templateFormats: [`md`, `njk`],
  };

};
