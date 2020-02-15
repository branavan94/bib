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
  for(var i = 1;i<22;i++)
  {
  var name = $("body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child("+i+") > div > div.card__menu-content.js-match-height-content > h5 > a").text();
  var city = $("body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child("+i+") > div > div.card__menu-footer.d-flex.js-match-height-footer > div.card__menu-footer--location.flex-fill").text();
  name = name.replace(/\n/g,'').trim().toLowerCase();
  city = city.replace(/\n/g,'').trim().toLowerCase();
  if(name != '')
  {
  tab.push({name,city});
  }
  }
  //return {name, experience};
  return tab
};

/**
 * Scrape a given restaurant url
 * @param  {String}  url
 * @return {Object} restaurant
 */
module.exports.scrapeRestaurant = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }
  if(url  == 'https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/29')
  {
  const $ = cheerio.load(data);
  var tab = [];
  for(var i = 1;i<6;i++)
  {
  var name = $("body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child("+i+") > div > div.card__menu-content.js-match-height-content > h5 > a").text();
  var city = $("body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child("+i+") > div > div.card__menu-footer.d-flex.js-match-height-footer > div.card__menu-footer--location.flex-fill").text();
  name = name.replace(/\n/g,'').trim();
  city = city.replace(/\n/g,'').trim(); 
  tab.push({name,city});
  }
  return tab;
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
