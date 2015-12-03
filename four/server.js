var express = require('express'),
	app = express();

	app.use(express.static(__dirname + '/public/images'));
	console.log('use localhost:3000/spider.jpg');

	app.get(function (req, res){
		res.writehead(200, {'content-type': 'text/plain'});
	});

	var dinner = [
{
	course: 'First',
	dish: 'Duck Pate'
},
{
	course: 'Second',
	dish: 'Terrine'
},
{
	course: 'Third',
	dish: 'Spider Caviar Sorbet Pizookie'
}
	];

	app.get('/', function (req, res){
		res.json(dinner);
	});


	app.listen(process.env.PORT || 3000, function(){
		console.log('http://localhost:3000/')
	});