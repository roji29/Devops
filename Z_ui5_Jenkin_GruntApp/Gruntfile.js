module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
        all: ['WebContent/*.js', 'WebContent/**/*.js', '!**/Component-preload.js']
    },
    xml_validator: {
        your_target: {
          src: [ 'WebContent/*.xml', 'WebContent/**/*.xml' ]
        },
      },
    htmlhint: {
                html1: {
                  options: {
                    'tag-pair': true
                  },
                  src: ['WebContent/*.html','WebContent/**/*.html']
                }
              },
    openui5_preload: {
      component: {
        options: {
          resources: {
            cwd: 'WebContent',
            prefix: 'Z_ui5_Jenkin_GruntApp',
            src: [
              '**/*.js',
              '**/*.fragment.html',
              '**/*.fragment.json',
              '**/*.fragment.xml',
              '**/*.view.html',
              '**/*.view.json',
              '**/*.view.xml',
              '**/*.properties',
              '**/Valuehelp.json',
              '!**/Component-preload.js'
            ]
          },
          dest: 'WebContent',
          compress: true
        },
        components: true
      }
    },
        nwabap_ui5uploader: {
            options: {
                conn: {
                    server: 'https://hrd.ngco.com:8200',
                      useStrictSSL : false,
                      client : '200'
                },
                auth: {
                    user: 'rkhare',
                    pwd: 'June@04'
                }
            },
            upload_webapp: {
                options: {
                    ui5: {
                        package: '$TMP',
                        bspcontainer: 'Z_ui5_Jenkin_GruntApp',
                        bspcontainer_text: 'Test Grunt UI5 upload test',
                        calc_appindex : true // Clear Cache
                    },
                    resources: {
                        cwd: 'WebContent',
                        src: '**/*.*'
                    }
                }
            }
            
        }
                             //
  });



  grunt.loadNpmTasks('grunt-openui5');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-xml-validator');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-nwabap-ui5uploader');
  grunt.registerTask('default', ['jshint', 'xml_validator', 'htmlhint', 'openui5_preload', 'nwabap_ui5uploader']);

}
