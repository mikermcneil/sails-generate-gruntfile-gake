/**
 * Module dependencies
 */
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
	},


	// TODO: custom-render stuff using options + the Gruntfile template
	// (e.g. only include coffeescript task if `options.coffeescript` is an object)
	// render: function (options, handlers) {}

};
