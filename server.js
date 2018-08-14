var express 	= require('express'),
	OrientDB 	= require('orientjs'),
	config		= require('./config.json'),
	app 		= express();

app.use(express.static('src'));


// Connect db server
var server = OrientDB({
	host:       config.server.host,
	port:       config.server.port,
	username:   config.server.username,
	password:   config.server.password
});

// Connect Database
db = server.use({
	name:     config.db.name,
	username: config.db.username,
	password: config.db.password
});

async function create_test() {
	
	// db.class.list().then((classes) => {
	// 	classes.forEach((class_) => {
	// 		console.log(class_.name)
	// 	})
	// })

	// let P = db.class.create('Todo').then((todo) => {
	// 	console.log('Created Class: ' + todo.name)
	// });
}

Promise.all([create_test()])
.then(function() { console.log('all done'); server.close(); })
.catch(function(e){ console.log(e); server.close(); });

app.set('port', process.env.PORT || 7000)
app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'))
})