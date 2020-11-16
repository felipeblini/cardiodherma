module.exports = function(grunt) {

    // This is the configuration.
    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    'js/bootstrap.min.js',
                    'js/isotope.pkgd.min.js',
                    'js/jquery.easing.min.js',
                    'js/jquery.magnific-popup.js',
                    'js/jquery.min.js',
                    'js/morphext.min.js',
                    'js/popper.min.js',
                    'js/swiper.min.js',
                    'js/validator.min.js',
                    'js/scripts.js'
                ],
                dest: 'dist/bundle-release.js',
            },
            css: {
                src: [
                    'css/animate.css',
                    'css/bootstrap.css',
                    'css/fontawesome-all.css',
                    'css/magnific-popup.css',
                    'css/styles.css',
                    'css/swiper.css'
                ],
                dest: 'dist/bundle-release.css'
            }
        },
    });
        
    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    // Default task(s).
    grunt.registerTask('default', ['concat']);
};