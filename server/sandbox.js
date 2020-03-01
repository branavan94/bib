const michelin = require('./michelin');
const fs = require('fs') ;
const axios = require('C:/Users/brano/Desktop/4A/S8/Web Application Architectures/Bib/bib2/bib/node_modules/axios');
const restaurateur = require('./restaurateur');
const levenshtein = require('js-levenshtein');
const load_michelin = require('./load_michelin');
async function sandbox () {
  try {
    console.log(`🕵️‍♀️  browsing ...`);

    var restaurant = await michelin.scrapeRestaurant('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/');
    for(var i = 0; i<restaurant.length;i++){
    var tel = await load_michelin.getcoordinates("https://guide.michelin.com/"+restaurant[i].telephone);
    restaurant[i].telephone = tel;
  }

   var count = 2;
    do
      {
          var temp = await michelin.scrapeRestaurant('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/'+count);
          if(temp.length != 0)
        {
              for(var i = 0; i<temp.length;i++)
              {
                  var tel = await load_michelin.getcoordinates("https://guide.michelin.com/"+temp[i].telephone);
                  temp[i].telephone = tel;
              }
          temp.forEach(item => restaurant.push(item));
          count++;
        }
      } while(temp.length != 0);

  var maitre = await restaurateur.scrapeMaitre('https://www.maitresrestaurateurs.fr/module/annuaire/ajax/load-maps-data');

  var result = [];
  var count = 0;
  for(var i = 0;i<restaurant.length;i++)
  {
  var n = maitre.includes(restaurant[i].telephone);
  if(n == true)
  {
    count++;
    var temp1 = restaurant[i].name;
    var temp2 = restaurant[i].telephone;
    result.push({temp1,temp2});
  }
  }
  console.log(result);
var stream = fs.createWriteStream("data.txt");
stream.once('open', function(fd) {
  result.forEach(element => {
  stream.write(element.temp1+"                                    telephone:"+element.temp2+"\n");
  });
    stream.end();
});

  console.log("ok");
} 
  catch (e) 
  {
    console.error(e);
    process.exit(1);
  }
}


sandbox();