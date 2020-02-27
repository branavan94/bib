const axios = require('axios');
const cheerio = require('cheerio');
/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
  const $ = cheerio.load(data);
  var tab = [];

  /*var c = 1;
  var length = $("  body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation.js-restaurant__list_items > div:nth-child(13) > div > div.card__menu-image > a").text();
  length = length.replace(/\n/g,'').trim().toLowerCase();
  while(length.length >2 )
  {
    c++;
    length = $("body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child("+c+") > div > div.card__menu-content.js-match-height-content > h5 > a").text();
    length = length.replace(/\n/g,'').trim().toLowerCase();
  }
  for(var i = 1;i<c+1;i++)
  {
  var name = $("body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child("+i+") > div > div.card__menu-content.js-match-height-content > h5 > a").text();
  var city = $("body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child("+i+") > div > div.card__menu-footer.d-flex.js-match-height-footer > div.card__menu-footer--location.flex-fill").text();
  name = name.replace(/\n/g,'').trim().toLowerCase();
  city = city.replace(/\n/g,'').trim().toLowerCase();
  if(name != '')
  {
  tab.push({name,city});
  }
  }*/
  const a = $('a.link').each((i,element) => {
  var b = $(element).attr('aria-label');
  var ref = $(element).attr('href');

  var name = b.replace(/Open /g,'').trim().toLowerCase();
  tab.push({name,ref});
  });
  return tab
};


module.exports.scrapeRestaurant = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }
  console.error(status);

  return null;
};

/**
 * Get all France located Bib Gourmand restaurants
 * @return {Array} restaurants
 */
module.exports.get = () => {
  return [];
};
