'use strict';
 
module.exports = function (grunt) {
    
    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: "src/less/*.less",
            tasks: ["less"]
        },
        // "less"-task configuration
        less: {
            // production config is also available
            development: {
                options: {
                    // Specifies directories to scan for @import directives when parsing. 
                    // Default value is the directory of the source, which is probably what you want.
                    paths: ["src/less/"],
                },
                files: {
                    // compilation.css  :  source.less
                    "css/style.css": "src/less/styles.less"
                }
            },
        },
        uglify: {
            my_target: {
                files: {
                    'js/vendor.min.js': ['bower_components/parallax.js/parallax.js']
                }
            }
        },
    });
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // the default task (running "grunt" in console) is "watch"
     grunt.registerTask('default', ['watch']);
     grunt.loadNpmTasks('grunt-contrib-uglify');
};