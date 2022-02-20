module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy(`images`);
  eleventyConfig.addPassthroughCopy(`bibliography/bibliography.js`);

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
