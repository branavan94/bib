
const axios = require ("axios") ;
const sandbox = require('./sandbox');

for(i= 0 ;i<60;i++)
{
sandbox.sandbox(`http://apir.viamichelin.com/apir/2/findPOI.json2/RESTAURANT/eng?center=2.35:48.85&authKey=RESTGP20200128141016590329233794&nb=20&sidx=${i}&filter=bib_gourmand%20eq%201&charset=UTF-8`);
}
