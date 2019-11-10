var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var MESSAGES_COLLECTION = "messages";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// CONTACTS API ROUTES BELOW
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/messages"
 *    GET: finds all messages
 *    POST: creates a new message
 */

app.get("/api/messages", function(req, res) {
	db.collection(MESSAGES_COLLECTION).find({}).toArray(function(err, docs) {
		if (err) {
			handleError(res, err.message, "Failed to get contacts.");
		} else {
			res.status(200).json(docs);
		}
	});
});

app.post("/api/messages", function(req, res) {
	var newMessage = req.body;
	newMessage.createDate = new Date();

	if (!req.body.device) {
		handleError(res, "Invalid user input", "Must provide a device.", 400);
	} else {
		db.collection(MESSAGES_COLLECTION).insertOne(newMessage, function(err, doc) {
			if (err) {
			 handleError(res, err.message, "Failed to create new message.");
			} else {
				res.status(201).json(doc.ops[0]);
			}
		});
	}
});

/*  "/api/messages/:id"
 *    GET: find message by id
 *    PUT: update message by id
 *    DELETE: deletes message by id
 */

app.get("/api/messages/:id", function(req, res) {
});

app.put("/api/messages/:id", function(req, res) {
});

app.delete("/api/messages/:id", function(req, res) {
});