// Author: Branden Horiuchi <bhoriuchi@gmail.com>
// Description: set limit
//


module.exports = function(config) {
	
	var u = config.utils.util;
	
	// return the function
	return function(limit) {
		
		var _self = this;
		var err;
		
		// check resolve input
		_self.results = u.resolveInput(null, _self).then(function(results) {
			
			// throw an error if the results are an error
			if (u.isErr(results.results)) {
				throw results.results;
			}
			
			// set the limit
			_self._limit = !isNaN(limit) ? parseInt(limit, 10) : null;
			_self._limit = _self._limit > 0 ? _self._limit : 1;
			
			// return the results
			return results.results;
		})
		.caught(function(e) {

			// create a new error
			err = u.newErr(
				e.errno,
				'An error was thrown during the limit call',
				e.code,
				e.message,
				e.stack
			);
			
			// check if the error was thrown by factory or knex/bookshelf
			err = u.isErr(e) ? e : err;
			
			// check if errors should be thrown. usually used for
			// a chained transaction				
			if (_self.throwErrors) {
				throw err;
			}
			
			// return the error
			return u.wrapPromise(err);
		});
		


		// update model properties and return the model
		_self._lastChain = {
			method: config.statics.methods.limit
		};

		return _self;
	};
};