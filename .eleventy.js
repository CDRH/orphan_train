const papa = require('papaparse');
module.exports = eleventyConfig => {
    eleventyConfig.addDataExtension("csv", (contents) => {
        console.log("reading data");
        const records = papa.parse(contents, {header: true});
        console.log(`${records.data.length} records found.`);
        return records.data;
      });

      eleventyConfig.addPassthroughCopy('css')
      eleventyConfig.addPassthroughCopy('images')
//used so we can have css files that are copied to the ending website
  return {
    passthroughFileCopy: true
  }
    };