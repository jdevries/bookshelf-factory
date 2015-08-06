// create a database connection config
var config = {
	"client": "mysql",
	"connection": {
		"host": "127.0.0.1",
		"user": "db",
		"password": "password",
		"database": "test",
		"charset": "utf8"
	},
	debug: false
};

// import the modules
var factory   = require('../../lib/factory')(config);
var schema    = require('./versioned-schema')(factory.schemer.constants);
var data      = require('./versioned-data');
var models;

// validate the schema
schema = factory.prepareSchema(schema) || {};

			
// forge all of the model definitions
models = factory.create(schema);


return models.list.forge().publish(3).then(function(results) {
	console.log(results);
})
.then(function() {
	// exit the app
	process.exit();
});










