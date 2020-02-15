const axios = require('axios');
const cheerio = require('cheerio');


module.exports.scrapeMaitre = async url => 
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
  const response = await axios(url);
  eval(response.data);
  var tab = []
  addressPoints.forEach(element => tab.push(element[3].entreprise.toLowerCase()));
  //console.log(tab.length)
  return tab
}


