var express = require('express'),
	app = express();

	app.use(express.static(__dirname + '/public/images'));
	console.log('go to localhost:3000/cuteImageForReal.png')

	app.get(function (req, res){
		res.writehead(200, {'content-type': 'text/plain'});
	});


	app.listen(process.env.PORT || 3000, function(){
		console.log('explore http://localhost:3000/')
	});