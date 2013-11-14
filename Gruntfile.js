module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    emberTemplates: {
      compile: {
        options: {
          templateBasePath: 'templates/'
        },
        files: {
          "js/templates.js": "templates/**/*.handlebars"
        }
      }
    },

    sass: {
      dist: {
        files: {
          "css/application.css": "sass/application.scss"
        }
      }
    },

    qunit: {
      all: "test/**/*.html"
    },

    watch: {
      templates: {
        files: "templates/**/*.handlebars",
        tasks: "emberTemplates"
      },
      sass: {
        files: "scss/*.scss",
        tasks: "sass"
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-qunit');

};