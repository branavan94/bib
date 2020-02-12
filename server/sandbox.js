/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');
const axios = require('axios');
async function sandbox () {
axios.all([
    axios.get('http://apir.viamichelin.com/apir/2/findPOI.json2/RESTAURANT/fra?center=2.35:48.85&authKey=RESTGP20200128141016590329233794&nb=100&dist=200000&filter=bib_gourmand%20eq%201&charset=UTF-8'),
    axios.get('http://apir.viamichelin.com/apir/2/findPOI.json2/RESTAURANT/fra?center=2.35:48.85&authKey=RESTGP20200128141016590329233794&nb=10&dist=200000&filter=bib_gourmand%20eq%201&charset=UTF-8')
  ])
  .then(axios.spread(function (userResponse, reposResponse) {
    //... but this callback will be executed only when both requests are complete.
    const restaurant = michelin.scrapeRestaurant(userResponse);
    console.log(restaurant);
    //console.log(restaurant[0].length);
  }));
    //const restaurant = await michelin.scrapeRestaurant(searchLink);
    //const restaurant = await axios(searchLink)
    //console.log(restaurant);
    //console.log(restaurant.length);
    //console.log('done');
    //process.exit(0);
}

//const [,, searchLink] = process.argv;
sandbox();

