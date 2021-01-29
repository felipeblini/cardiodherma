module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: [
                    //'js/validator.min.js',
                    'js/scripts.js'
                ],
                dest: 'dist/js/bundle-concated.js'
            },
            css: {
                src: ['css/**/*.css'],
                dest: 'dist/css/styles.min.css'
            }
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    'dist/js/bundle-es5.js': 'dist/js/bundle-concated.js'
                }
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                files: {
                    'dist/js/scripts.min.js': 'dist/js/bundle-es5.js'
                }
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        imagemin: {
            images: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'dist/images'
                }]
            },
            photos: {
                files: [{
                    expand: true,
                    cwd: 'photos/',
                    src: ['**/*.{png,jpg,jpeg,gif}'],
                    dest: 'dist/photos'
                }]
            }
        },
        copy: {
            index: {
                files: [
                    {
                        expand: true, src: ['index.html'], dest: 'dist/', filter: 'isFile'
                    },
                ],
            },
        },
        clean: {
            js: ['dist/js/*.js', '!dist/js/*.min.js'],
            css: ['dist/css/*.css', '!dist/css/*.min.css']
        },
        'string-replace': {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: '**/*.html',
                    dest: 'dist/'
                }],
                options: {
                    replacements: [{
                        pattern: /css\/styles\.css/ig,
                        replacement: 'css/styles.min.css',
                    },
                    {
                        pattern: /js\/scripts\.js/ig,
                        replacement: 'js/scripts.min.js',
                    },
                        // {
                        //     pattern: /<script src="js\/validator\.min\.js"><\/script>/ig,
                        //     replacement: '',
                        // }
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html',
                }
            },
        }
    });

    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'babel', 'uglify', 'cssmin', 'imagemin', 'copy', 'string-replace', 'htmlmin', 'clean']);
};