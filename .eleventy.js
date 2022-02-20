module.exports = function(eleventyConfig) {

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
