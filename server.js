const express = require('express');
const handlebar = require('hbs');

var app = express();

//handlebar.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/local')); // sends out the files in this floder 

/*app.get('/login', (rep, res)=>{
	res.send('index.html');
});*/

app.listen(3000, () =>{
	console.log('login page is working properly')
})