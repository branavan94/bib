/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');
const axios = require('C:/Users/brano/Desktop/4A/S8/Web Application Architectures/Bib/bib2/bib/node_modules/axios');
const restaurateur = require('./restaurateur');

async function sandbox () {
  try {
    console.log(`🕵️‍♀️  browsing ...`);
  axios.get('https://www.maitresrestaurateurs.fr/module/annuaire/ajax/load-maps-data')
  .then(async function (userResponse) 
  {
    //restaurateur.scrapeMaitre(userResponse.data);
    console.log(userResponse.data);
  });

   /* var restaurant = await michelin.scrapeRestaurant('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand');
    for(var i = 2;i<30;i++)
      {
          var temp = await michelin.scrapeRestaurant('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/'+i);
          temp.forEach(item => restaurant.push(item));
      }
    
    console.log(restaurant.length);*/
  } 
  catch (e) 
  {
    console.error(e);
    process.exit(1);
  }
}

sandbox();
