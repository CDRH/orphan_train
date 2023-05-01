const papa = require('papaparse');

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("csv", (contents) => {
    console.log("reading data");
    const records = papa.parse(contents, { header: true });
    console.log(`${records.data.length} records found.`);
    return records.data;
  });


  // shortcode method to turn root-relative link to relative
  eleventyConfig.addShortcode("relativeUrl", function (url) {
    //url should be "/like/this" if root-relative
    if (url.startsWith("/")) {
      // See https://www.11ty.dev/docs/languages/liquid/ for more info on page
      // variables.
      let path = require('path');

      const relativeUrl = path.relative(this.page.url, url); // Use page.url instead of page.filePathStem
      return relativeUrl;
    } else {
      //URL is already relative/absolute
      return url;
    }

  });

  eleventyConfig.addShortcode("correctAge", function(numString) {
    print("correcting age");
    if (numString.includes("mos.")){
      print("mos");
      //We assume it was in months, convert to equivalent years
      //parseFloat gets rid of the mos. part
      let actualAge = parseFloat(numString) / 12;
      //turn to string and trim to 2 decimals
      let display = actualAge.toFixed(2);
      return display;

    } else {
      print("normal");
      return numString
    }

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