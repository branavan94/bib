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
  addressPoints.forEach(function(item)
  {
    //tab.push(element[3].entreprise.toLowerCase(),round(element[0],2), round(element[1],2))
    temp = item[2].adr;
    var name =item[3].entreprise.toLowerCase();
    var str = temp.split("<br>");
    str[1] = str[1].replace(/ /g,'').trim();
    var tel  =str[1];
    tab.push(name,tel);
  });
  //console.log(tab.length)
  return tab
}
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}



