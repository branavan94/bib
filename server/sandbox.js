/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');
const axios = require('C:/Users/brano/Desktop/4A/S8/Web Application Architectures/Bib/bib2/bib/node_modules/axios');
const restaurateur = require('./restaurateur');

async function sandbox () {
  try {
    console.log(`🕵️‍♀️  browsing ...`);
    var restaurant = await michelin.scrapeRestaurant('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand');
    for(var i = 2;i<30;i++)
      {
          var temp = await michelin.scrapeRestaurant('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/'+i);
          temp.forEach(item => restaurant.push(item));
      }
    
  console.log(restaurant.length);

  var maitre = await restaurateur.scrapeMaitre('https://www.maitresrestaurateurs.fr/module/annuaire/ajax/load-maps-data');
  //console.log(maitre.length)
  var result = [];
  var count = 0;
  for(var i = 0;i<restaurant.length;i++)
  {
  var n = maitre.includes(restaurant[i].name);
  if(n == true)
  {
    count++;
    result.push(restaurant[i]);
  }
  }
  console.log(result);
  /*axios.get('')
  .then(async function (userResponse) 
  {
    var maitre = restaurateur.scrapeMaitre(userResponse);
    return maitre
  });*/
    } 
  catch (e) 
  {
    console.error(e);
    process.exit(1);
  }
}
sandbox();
