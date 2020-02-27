/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');
const axios = require('C:/Users/brano/Desktop/4A/S8/Web Application Architectures/Bib/bib2/bib/node_modules/axios');
const restaurateur = require('./restaurateur');
const levenshtein = require('js-levenshtein');
const load_michelin = require('./load_michelin');
async function sandbox () {
  try {
    console.log(`🕵️‍♀️  browsing ...`);

    var restaurant = await michelin.scrapeRestaurant('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/');
    for(var i = 0; i<restaurant.length;i++){
    var tel = await load_michelin.getcoordinates("https://guide.michelin.com/"+restaurant[i].ref);
    restaurant[i].ref = tel;
  }

   var count = 2;
    do
      {
          var temp = await michelin.scrapeRestaurant('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/'+count);
          if(temp.length != 0)
        {
              for(var i = 0; i<temp.length;i++)
              {
                  var tel = await load_michelin.getcoordinates("https://guide.michelin.com/"+temp[i].ref);
                  temp[i].ref = tel;
              }
          temp.forEach(item => restaurant.push(item));
          count++;
        }
      } while(temp.length != 0);
   console.log(restaurant.length);

  var maitre = await restaurateur.scrapeMaitre('https://www.maitresrestaurateurs.fr/module/annuaire/ajax/load-maps-data');
  console.log(maitre.length)

  var result = [];
  var count = 0;
  for(var i = 0;i<restaurant.length;i++)
  {
  var n = maitre.includes(restaurant[i].ref);
  if(n == true)
  {
    count++;
    result.push(restaurant[i].name);
  }
  }
  console.log(result);
  console.log(result.length)
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