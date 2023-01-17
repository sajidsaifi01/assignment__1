/*Q3) Write two scripts in python / Nodejs which run in parallel (as in each script in a different
terminal). The first script needs to generate a random number and push it to redis at random
time-intervals, the second script needs to get this number from redis as soon as the first script
pushes it and print it. (e.g. one script says 'sent 2332' the other says 'received 2332').*/ 


const redis = require('redis');
const fetch = require('node-fetch');


let randomNum = Math.floor(Math.random() * 3000) + 1;
console.log(randomNum)