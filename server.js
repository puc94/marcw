var express 	= require('express'),
	path 		= require('path'),
	bodyParser 	= require('body-parser'),
	OrientDB 	= require('orientjs'),
	config		= require('./config.json'),
	app 		= express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'pug');

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

// Index
app.get('/', (req, res) => {
	Promise.all([get_tasks()])
	.then(function(response) {
		res.render('index', {tasks: response[0]})
	})
	.catch(function(e){ console.log(e); });
});

// Create page
app.get('/create', (req, res) => {
	res.render('create');
})

// Store task
app.post('/store', (req, res) => {
	Promise.all([insert_task(req.body)])
	.then(function() {
		res.redirect('/')
	})
	.catch(function(e){ console.log(e); });
})

// Edit page
app.get('/edit/:cluster/:position', (req, res) => {
	db.record.get(`#${req.params.cluster}:${req.params.position}`)
	.then((record) => {
		res.render('edit', {task: record});
	})
	.catch((e) => {
		console.log(e)
	})
})

// Update task
app.post('/update', (req, res) => {
	db.record.get(`#${req.body.cluster}:${req.body.position}`)
	.then((record) => {
		record.name = req.body.name
		db.record.update(record)
			.then(function() {
				res.redirect('/')
			})
		// res.render('edit', {task: record});
	})
})

app.get('/delete/:cluster/:position', (req, res) => {
	db.record.delete(`#${req.params.cluster}:${req.params.position}`)
	.then((record) => {
		res.redirect('/')
	})
	.catch((e) => {
		console.log(e)
	})
})

async function insert_task(request) {
	var task = await db.class.get('Task')
	return task.create({
		name: request.name
	})
}

async function get_tasks() {
	var task = await db.class.get('Task')
	return await task.list()
}

app.set('port', process.env.PORT || 7000)
app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'))
})