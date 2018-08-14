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
	Promise.all([get_tasks()])
	.then(function(response) {
		res.render('create', {tasks: response[0]})
	})
	.catch(function(e){ console.log(e); });
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
		Promise.all([get_tasks()])
		.then(function(response) {
			res.render('edit', {task: record, tasks: response[0]})
		})
		.catch(function(e){ console.log(e); });
	})
	.catch((e) => {
		console.log(e)
	})
})

// Update task
app.post('/update', (req, res) => {
	db.record.get(`#${req.body.cluster}:${req.body.position}`)
	.then((record) => {
		record.todo = req.body.todo
		var parent_ids = req.body.parent_ids;
		if (typeof parent_ids == "undefined") {
			parent_ids = []
		}
		else if (typeof parent_ids == "string") {
			parent_ids = [parent_ids]
		}
		record.parent_ids = parent_ids

		db.record.update(record)
			.then(function() {
				res.redirect('/')
			})
	})
})

// Delete task
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
	sequence = await db.query("Select sequence('idseq').next() as id")
	var parent_ids = request.parent_ids;
	if (typeof parent_ids == "undefined") {
		parent_ids = []
	}
	else if (typeof parent_ids == "string") {
		parent_ids = [parent_ids]
	}

	var task_obj = await task.create({
		id: sequence[0].id,
		todo: request.todo,
		parent_ids: parent_ids
	});
}

async function get_tasks() {
	var task = await db.class.get('Task')
	var tasks = await task.list()
	for (var i = 0; i < tasks.length; i++) {
		var parent_ids = tasks[i]["parent_ids"];
		var parents = await db.query("SELECT FROM Task Where id in :parent_ids", {params:{
            parent_ids: parent_ids
           }});
		tasks[i]["parents"] = parents
	}

	return tasks;
}

app.set('port', process.env.PORT || 7000)
app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'))
})