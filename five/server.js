var express = require('express'),
	app = express();

app.use(express.static('public'));
console.log('use localhost:3000/');

var doughnuts = [
'plain',
'powdered',
'chocolate'
];

var beverages = [
	{
		drink: 'Martini',
		mainIngredient: 'Gin'
	},
	{
		drink:'Screwdriver',
		mainIngredient:'Orange Juice'
	},
	{
		drink:'Water',
		mainIngredient:'Oxygen'
	}
];

app.get('/', function (req, res){
	res.send(doughnuts);
	console.log("http://localhost:3000/");
	});
app.get('/api/beverages', function (req, res){
	res.json(beverages);
	console.log("http://localhost:3000/api/beverages");

	
});

app.listen(process.env.PORT || 3000, function(){
	console.log('go to http://localhost:3000/')
});