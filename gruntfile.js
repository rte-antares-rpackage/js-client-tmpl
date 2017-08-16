module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
        browserifyOptions : {
          debug: true
        }
      },
      dist: {
        src: "src/main.js",
        dest: "dist/<%= pkg.name %>.js"
      },
      test: {
        files: {
          "test/test.js": ["test/src/*.js"]
        },
        options: {
          browserifyOptions: {
            transform: [["browserify-istanbul", {ignore:["**/lib/**"]}]],
            debug: true
          }
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %>\n'
      },
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      source: {
        files: ["src/**/*", "test/**/*"],
        tasks: ["test"]
      }
    },
    mocha_phantomjs: {
      options: {
        config: {
          "hooks": __dirname + '/test/src/phantom_hooks.js'
        }
      },
      all: 'test/test.html'
    },
    makeReport: {
      src: 'coverage/coverage.json',
      options: {
        type: 'lcov',
        dir: 'coverage',
        print: 'detail'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-istanbul');
  // Default task(s).
  grunt.registerTask('build', ['browserify', 'uglify']);
  grunt.registerTask("build-test", ['browserify:test']);
  grunt.registerTask("test", ["build-test", "mocha_phantomjs", "makeReport"])
  grunt.registerTask('default', ['watch:source']);

};
