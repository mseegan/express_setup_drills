var express = require('express'),
	app = express();

//also check my index.html, you may also access the image there
app.use(express.static(__dirname + '/public/images'));
console.log('go to localhost:3000/amICute.jpg');

app.get(function (req, res){
	res.writehead(200, {'content-type': 'text/plain'});
});

app.get("/", function (req, res){
	res.send('200 OK')
});


app.listen(process.env.PORT || 3000, function() {
	console.log('open http://localhost:3000/ in your browser')
});