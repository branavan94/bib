const axios = require('axios');
const cheerio = require('cheerio');


module.exports.scrapeMaitre = async response => 
{
  /*const restaurant_list = data.poiList;
  const michou = []
  for(var i = 0; i<restaurant_list.length; i++)
  {
  	const address = restaurant_list[i].datasheets[0].address
  	const name = restaurant_list[i].datasheets[0].name
  	michou.push({address,name})
  }
  return michou;*/
  //var $ = cheerio.load(response.data);
  eval(response.data);
  var tab = []
  addressPoints.forEach(element => tab.push(element[3].entreprise));
  console.log(tab.length)
}


