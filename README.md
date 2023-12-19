# orphan_train
A repository for the orphan train project

This site uses eleventy. [Learn more about eleventy here.](https://www.11ty.dev/)

use the following commands for running the site setup:

`npm run build` (if regenerating files)

`npm run start` (if running live website)


To run with updated data, replace the Orphan_Train_Data.csv file with the updated data (using the same name of Orphan_Train_Data.csv) and rerun one of the commands above.

# Writing Root-Relative links
By default, the links eleventy generates will be root relative. This works fine when running the live website (with `npm run start`), but for a static site it doesn't work. 
The solution is to calculate the location by using

`{% capture baseRoot %}{% relativeUrl "/" %}{% endcapture %}` 

at the beginning of the page. This makes a variable **baseRoot** that contains the relative path for the given page by using a shortcode found in the .eleventy.js file. This can then be used for your links by writing `{{baseRoot | append: "your-relative-link-here"}}`.

# Adding a new page
When making a new `.liquid` page, the header and footer can be added by using `{%render 'header' urlRoot: baseRoot %}`. The baseRoot is what is calculated above and is passed in to the header and footer to allow them to path correctly. The header and footer have to be added in this way because they exist in a different directory compared to the pages. This is to ensure uniform appearances across the site.

