# orphan_train
A repository for the orphan train project

This site uses eleventy. [Learn more about eleventy here.](https://www.11ty.dev/)

use the following commands for running the site setup:
npm run build (if regenerating files)
npm run start (if running live website)


To run with updated data, replace the Orphan_Train_Data.csv file with the updated data (using the same name of Orphan_Train_Data.csv) and rerun one of the commands above.

The following were steps taken to clean data already:

1. Removed space from the end of column header "Adopted Name Last "
Explanation: Data correction


# Writing Root-Relative links
By default, the links eleventy generates will be root relative. This works fine when running the live website (with `npm run start`), but for a static site it doesn't work. 
The solution is to wrap the following around the link: `{% relativeUrl **"/your-root-relative-link-here/"** %}`. This uses a shortcode found in the .eleventy.js file to turn the root-relative link to a relative link.
