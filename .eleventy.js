const papa = require('papaparse');
const relativeUrl = require('eleventy-filter-relative-url');
const path = require("path");

const relativeFilter = (page, root = "/") => {
  return `${require("path").relative(page.filePathStem, root)}/`
}



module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("csv", (contents) => {
    //console.log("reading data");
    const records = papa.parse(contents, { header: true });
    console.log(`${records.data.length} records found.`);
    return records.data;
  });

  // shortcode method to turn absolute link to relative
  eleventyConfig.addShortcode("relativeUrl", function (url) {
    if (!url.startsWith("/")) {
      //URL is already relative or absolute, so we don't need to change it
      return url;
    }
    // See https://www.11ty.dev/docs/languages/liquid/ for more info on page
    // variables.
    const relativeUrl = path.relative(this.page.url, url);
    return relativeUrl;
  });

  //used so we can have css files and assets that are copied to the ending website
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('images')

  /*
  The following adds a copy of the CSV so future people can work with the data. 
  This could be changed if we want the public to have access to a different set of data/need to hide some things
  for privacy concerns, we would just need to change the link on the table.liquid file
  */
  eleventyConfig.addPassthroughCopy('_data')

  return {
    passthroughFileCopy: true
  }
};