/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');
const axios = require('axios');
async function sandbox (searchLink = 'http://apir.viamichelin.com/apir/2/findPOI.json2/RESTAURANT/eng?center=2.35:48.85&authKey=RESTGP20200128141016590329233794&nb=20&sidx=58&filter=bib_gourmand%20eq%201&charset=UTF-8') {
  try {
    //console.log(`🕵️‍♀️  browsing ${searchLink} source`);

    const restaurant = await michelin.scrapeRestaurant(searchLink);
    //const restaurant = await axios(searchLink)
    console.log(restaurant);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, searchLink] = process.argv;
sandbox(searchLink);