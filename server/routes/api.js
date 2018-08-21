const express   = require('express');
const router    = express.Router();
const OrientDB  = require('orientjs');
const async     = require('async');
const bcrypt    = require('bcrypt');
const jwt       = require('jsonwebtoken');
const saltRounds = 10;

// Connect
var server = OrientDB({
    host:       "mawercer.de",
    port:       2424,
    username:   "root",
    password:   "root"
});

// Connect Database
db = server.use({
    name:     "jindb",
    username: "root",
    password: "root"
});

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Auth
router.post('/users/auth', (req, res) => {
    const data = req.body
    db.query(`SELECT FROM User WHERE email="${data.email}"`)
    .then((users) => {
        if (users.length == 0) {
            sendError("The email or password don't match", res);
        }
        else {
            var user = users[0];
            bcrypt.compare(data.password, user.password, function(err, flag) {
                if (flag) {
                    var token = jwt.sign({ userID: user.id }, 'marcw-secret', {expiresIn : '5h'});
                    user.token = token;
                    response.data = user;
                    res.json(response);
                }
                else {
                    sendError("The email or password don't match", res);
                }
            })
        }
    })
})

// Register
router.post('/users/register', (req, res) => {
    const data = req.body;

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(data.password, salt, function(err, hash) {
            db.query("Select sequence('userseq').next() as id")
            .then((sequence) => {
                db.insert().into('User').set({
                    id: sequence[0].id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: hash
                }).one().then((user) => {
                    response.data = user;
                    res.json(response);
                })
                .catch((err) => {
                    sendError(err, res);
                })
            })
        })
    })
})

// All tasks
router.get('/all_tasks', (req, res) => {
    db.query("Select From Task Order by id asc")
    .then((tasks) => {
        response.data = tasks;
        res.json(response);
    })
})

// Get tasks
router.get('/tasks', (req, res) => {
    var parent_ids
    db.query("Select From Task Order by id asc")
    .then((tasks) => {
        async.map(tasks, (task, callback) => {
            parent_ids = task["parent_ids"];
            db.query("SELECT FROM Task Where id in :parent_ids", { params: { parent_ids: parent_ids }})
            .then((parents) => {
                task["parents"] = parents
                callback(null, task)
            })
        }, (err, results) => {
            if (err) {
                console.log(err)
                sendError(err, res);
            }
            else {
                response.data = results;
                res.json(response);
            }
        })
    })
    .catch((err) => {
        sendError(err, res);
    })
});

// Get task
router.get('/task/:id', (req, res) => {
    db.query("SELECT FROM Task WHERE id = " + req.params.id)
    .then((task) => {
        response.data = task[0];
        res.json(response);
    })
    .catch((err) => {
        sendError(err, res);
    })
})

// Store task
router.post('/task', (req, res) => {
    db.query("Select sequence('idseq').next() as id")
    .then((sequence) => {
        db.insert().into('Task').set({
            id: sequence[0].id,
            todo: req.body.todo,
            parent_ids: req.body.parent_ids
        }).one().then((task) => {
            response.data = task;
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        })
    })
})

// Update task
router.put('/task/:id', (req, res) => {
    db.query("SELECT FROM Task WHERE id = " + req.params.id)
    .then((task) => {
        task[0].todo = req.body.todo;
        task[0].parent_ids = req.body.parent_ids;
        db.record.update(task[0])
        .then(function() {
            response.data = task[0];
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        })
    })
})

// Delete task
router.delete('/task/:id', (req, res) => {
    db.delete().from("Task").where(`id = ${req.params.id}`).limit(1).scalar()
    .then((del) => {
        res.end('Records Deleted: ' + del)
    })
})

module.exports = router;