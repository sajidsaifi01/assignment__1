/* Q2B) Code a python / nodes script which can scrape the movies currently in the "Box office"
from IMDB's homepage (https://www.imdb.com/chart/boxoffice/), list them and get the list of cast
for each of them. The script should be able to take a parameter to specify that only show details */


const https = require("http"); 
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const axios = require('axios');


dotenv.config();
app.use(cors());
app.use(express.json());


/* Through this API we can get all the top movies currently in the "Box office". If we need to get particular 
moive detail we just need to pass the id with the URL to fetch the particular movie detail please uncomment id 
veriable and URL we I passed the id.
*/

// To get the movie data please start the server press F5 to start the server and hit the URL either from the browser or thunder client/ Postmen
app.get('/get-all-top-movie', (req, res) => {
    let id = req.query.id
    const options = {
        method: 'GET',
        // url: 'https://imdb-top-10-movies.p.rapidapi.com/',
        url: `https://imdb-top-10-movies.p.rapidapi.com/top${id}`,
        headers: {
            'X-RapidAPI-Key': 'ae0467ded2mshb1c11314455fce3p174212jsn316731a9c0d7',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
        return res.status(200).json({ data: response.data })
    }).catch(function (error) {
        console.error(error);
    });
})



const PORT = process.env.PORT || 5000;
https.createServer(app).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
