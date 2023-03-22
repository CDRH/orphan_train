# orphan_train
A repository for the orphan train project

This site uses eleventy. [Learn more about eleventy here.](https://www.11ty.dev/)

use the following commands for running the site setup:
npm run build (if regenerating files)
npm run start (if running live website)


To run with updated data, replace the Orphan_Train_Data.csv file with the updated data (using the same name of Orphan_Train_Data.csv) and rerun one of the commands above.

The following were steps taken to clean data already:
1. Find: ,"
",
Replace: ,,

Explanation: Some columns had empty values that were represented by an empty string (""). The table works better if the columns are empty entirely.

2. Find: \](\d)\]
Replace: [$1]

Explanation: Some bracketed data was incorrectly bracketed (]7]). This was to correct that.

4. Find: Sates
Replace: States

Explanation: Correcting spelling
affected 446, 1424, 1425, 1426, 1427

5. Removed space from the end of column header "Adopted Name Last "
Explanation: Data correction