/**
 *
 *
 */
var Config = require('./conf/gruntconfig.js');

module.exports = function (grunt) {

    var config = Config;


    // grunt config
    grunt.initConfig({
        nightwatch: {
            options: {
                config_path: './conf/nightwatch.json',
            }
        }

    });

    //
    grunt.loadNpmTasks('grunt-nightwatch');


    // the developer watch task
    grunt.registerTask('go', ['nightwatch']);


};