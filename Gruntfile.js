/**
 * Gruntfile
 *
 * If you created your Sails app with `sails new foo --linker`,
 * the following files will be automatically injected (in order)
 * into the EJS and HTML files in your `views` and `assets` folders.
 *
 * At the top part of this file, you'll find a few of the most commonly
 * configured options, but Sails' integration with Grunt is also fully
 * customizable.  If you'd like to work with your assets differently
 * you can change this file to do anything you like!
 *
 * More information on using Grunt to work with static assets:
 * http://gruntjs.com/configuring-tasks
 */

module.exports = function (grunt) {
    // loads all tasks from the ./grunt/tasks folder

    // your config goes here :) or within the ./grunt/config folder
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        env: process.env.ENV || 'development',
        gake: {
          configDir: './grunt/config',
          tasksDir: './grunt/tasks'
        }
    };

    // Custom tasks,
    // you can either put them here, as usual, or create a new one using the sails g task task_name generator

    // make sure to call loadConfig after(not bofore) you've called the grunt.initConfig, since grunt
    // initConfig replaces all the config data.
    // This loads all configuration options from within the ./grunt/config folder
    grunt.initConfig(config);
    grunt.loadNpmTasks('gake');
};
