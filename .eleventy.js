module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy(`bibliography/bibliography.js`);
  eleventyConfig.addPassthroughCopy(`favicon.ico`);
  eleventyConfig.addPassthroughCopy(`images`);

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
