module.exports = function(eleventyConfig) {

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
