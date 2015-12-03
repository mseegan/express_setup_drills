var express = require('express'),
	app = express();

app.use(express.static('public'));

var deadGames = [
'baseball',
'competative walking',
'poker'
];

app.get('/deadGames', function (req, res){
	res.send(deadGames.join(","));
});


app.listen(process.env.PORT || 3000, function (){
	console.log('listening at http://localhost:3000/')
});
