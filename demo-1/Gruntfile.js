/* global module:false */

module.exports = function(grunt) {

    // Loading plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Project configuration
    grunt.initConfig({

        jshint: {
            src: ['src/**/*.js']
        }

    });
    
};