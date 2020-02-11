const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
  //const $ = cheerio.load(data);
  //const name = $('.section-main h2.restaurant-details__heading--title').text();
  //const experience = $('#experience-section > ul > li:nth-child(2)').text();
  const restaurant_list = data.poiList;
  const michou = []
  for(var i = 0; i<restaurant_list.length; i++)
  {
  	const address = restaurant_list[i].datasheets[0].address
  	const name = restaurant_list[i].datasheets[0].name
  	michou.push({address,name})
  }
  return michou;
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

/*
const axios = require ("axios") ;
const apikey = "JSV2GP20200128141016340780402486$165380";

const getWeather = location => {
	return new Promise (async(resolve , reject ) =>{
		try {
const weatherConditions = await axios.get( // get weather info from the api
	" https://api.apixu.com/v1/forecast.json",
	{
		params : {
			key: apikey ,
			q: location ,
			days : 3
		}
	}) ;
resolve (weatherConditions.data) // returns back the results to the chatbot
}
catch (error) 
	{
	reject (error) ;
	}
}) ;
}*/