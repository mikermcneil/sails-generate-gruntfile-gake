var path = require('path');

/**
 * Generator for `Gruntfile.js`
 * 
 * @option {String} templateFilePath		[path to `Gruntfile.js` template]
 */
module.exports = {
	/**
	 * @param  {[type]} options  
	 * @param  {[type]} sails    [our instance of `sails`]
	 * @param  {[type]} handlers [callbacks]
	 */
	configure: function(options, sails, handlers) {

		// Path to the template file to copy
		options.templateFilePath = path.resolve(__dirname, 'Gruntfile.js');

		// Location for newly created Gruntfile.js
		options.pathToNew = path.resolve(options.appPath, 'Gruntfile.js');
		

		return handlers.success(options);
	}
};
