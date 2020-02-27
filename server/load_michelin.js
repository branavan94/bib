const axios = require('axios');
const cheerio = require('cheerio');




  module.exports.getcoordinates = async url => {
  const response =  await axios(url);
  const {data, status} = response;
  const $ = cheerio.load(data);
  var tel = $('a.link').attr('href');
  tel = tel.replace(/\+33/g,'').trim().toLowerCase();
  tel = tel.replace(/tel:/g,'').trim();
  tel = tel.replace(/ /g,'').trim();
  var temp = '0';
  tel = temp.concat(tel);
  res = tel;
  if(res.length != 10){
  	res = "none"
  }
return res;
}
