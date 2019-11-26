module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            main: {
                src: 'assets/js/<%= pkg.name %>.js',
                dest: 'assets/js/<%= pkg.name %>.min.js'
            }
        },
        less: {
            expanded: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "assets/css/<%= pkg.name %>.css": "assets/less/<%= pkg.name %>.less"
                }
            },
            minified: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "assets/css/<%= pkg.name %>.min.css": "assets/less/<%= pkg.name %>.less"
                }
            }
        },
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['assets/css/<%= pkg.name %>.css', 'assets/css/<%= pkg.name %>.min.css', 'assets/js/<%= pkg.name %>.min.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['assets/js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            less: {
                files: ['assets/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            },
        },
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less', 'usebanner']);

};
