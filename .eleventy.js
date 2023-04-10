const papa = require('papaparse');
const relativeUrl = require('eleventy-filter-relative-url');

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("csv", (contents) => {
    console.log("reading data");
    const records = papa.parse(contents, { header: true });
    console.log(`${records.data.length} records found.`);
    return records.data;
  });


  // Override the default `url` filter with a relative one.
  eleventyConfig.addFilter('url', relativeUrl);

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