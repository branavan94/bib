const axios = require('axios');
const cheerio = require('cheerio');


module.exports.scrapeMaitre = async data => 
{
  const restaurant_list = data.poiList;
  const michou = []
  for(var i = 0; i<restaurant_list.length; i++)
  {
  	const address = restaurant_list[i].datasheets[0].address
  	const name = restaurant_list[i].datasheets[0].name
  	michou.push({address,name})
  }
  return michou;
}


