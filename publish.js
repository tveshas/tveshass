/**
 * This is a simple script to deploy the app using github pages.
 */

const ghpages = require('gh-pages');
const pathname = `${__dirname}/public`;
const repoURL = 'https://github.com/tanyjnaaman/tanyjnaaman.github.io.git';

ghpages.publish(
  pathname,
  {
    branch: 'main',
    repo: repoURL,
  },
  (err) => {
    if (err) console.log('ERROR: ', err);
    else console.log('PUBLISHED');
  }
);
