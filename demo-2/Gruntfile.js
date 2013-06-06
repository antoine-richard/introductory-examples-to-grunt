/* global module:false */

module.exports = function(grunt) {

  // Loading plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration
  grunt.initConfig({

    less: {
      dev: {
        files: {
          'src/css/styles.css': 'src/less/styles.less'
        }
      }
    },

    watch: {
      files: 'src/less/**/*.less',
      tasks: ['less:dev'],
      options: {
        livereload: true
      }
    }

  });

  // Default task
  grunt.registerTask('default', ['less:dev']);

};