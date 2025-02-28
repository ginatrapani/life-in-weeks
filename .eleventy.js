module.exports = function(eleventyConfig) {
  // Configure 11ty to use YAML data files
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents)); // P5f8e

  return {
    dir: {
      input: "src", // Pb410
      output: "_site" // Pb410
    }
  };
};
