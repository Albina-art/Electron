module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    babel:
      options:
        sourceMap: true
        presets: ['es2015']
      dist:
        files:
          'app/js/app.js': 'temp/es/app.js'
    haml:
      templates:
        options:
          target: 'js'
          language: 'coffee'
          precompile: true
        files:
          'temp/templates.js': ['haml/[^~]*.haml']
    concat:
      options:
        separator: ';'
      dev:
        src: ["temp/templates.js", 'vendor/*.js', 'js/declare.js', 'js/api.js', 'js/controllers/*.js', 'js/init.js']
        dest: 'temp/es/app.js'
    watch:
      haml:
        files: ['haml/[^~]*.haml'],
        tasks: ['haml'],
        options:
          atBegin: true
          # liverload: true
      concat:
        files: ["temp/templates.js", 'vendor/*.js', 'js/declare.js', 'js/api.js', 'js/controllers/*.js', 'js/init.js']
        tasks: ['concat:dev'],
        options:
          atBegin: true
      babel:
        files: 'temp/es/app/js'
        tasks: 'babel'
        options:
          atBegin: true
    concurrent:
      options:
        limit: 20
        logConcurrentOutput: true
      cwatch: [
        # 'watch:css',
        'watch:haml'
        'watch:concat'
        'watch:babel'
      ]


  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-ng-annotate'
  grunt.loadNpmTasks 'grunt-haml'
  grunt.loadNpmTasks 'grunt-concurrent'
  grunt.loadNpmTasks 'grunt-babel'


  # Default task(s).
  grunt.registerTask 'default', ['concurrent:cwatch']
  return
# module.exports = (grunt) ->
#   grunt.initConfig
#     pkg: grunt.file.readJSON('package.json')
#     haml:
#       templates:
#         options:
#           target: 'js'
#           language: 'coffee'
#           precompile: true
#         files:
#           'temp/templates.js': ['haml/[^~]*.haml']  
#     concat:
#       options:
#         separator: ';'
#       dev:
#         src: ["temp/templates.js", 'vendor/*.js', 'js/declare.js', 'js/api.js', 'js/controllers/*.js', 'js/init.js']
#         # откуда
#         dest: 'app/js/app.js'
#         # куда
#     watch:
#       haml:
#         files: ['haml/[^~]*.haml'],
#         tasks: ['haml'],
#         # при их изменении вызывать
#         options:
#           atBegin: true
#           # Эта опция будет вызывать прогон каждой указанной задачи при запуске наблюдателя.
#       concat:
#         files: ["temp/templates.js", 'vendor/*.js', 'js/declare.js', 'js/api.js', 'js/controllers/*.js', 'js/init.js']
#         tasks: ['concat:dev'],
#         options:
#           atBegin: true
#     concurrent:
#       options:
#         limit: 20
#         logConcurrentOutput: true
#         # При желании вы можете войти вывод ваших параллельных задач, указав параметр logConcurrentOutput. 
#       cwatch: [
#         # 'watch:css',
#         'watch:haml',
#         'watch:concat',
#       ]


#   grunt.loadNpmTasks 'grunt-contrib-watch'
#   grunt.loadNpmTasks 'grunt-contrib-coffee'
#   grunt.loadNpmTasks 'grunt-contrib-concat'
#   grunt.loadNpmTasks 'grunt-contrib-uglify'
#   grunt.loadNpmTasks 'grunt-contrib-copy'
#   grunt.loadNpmTasks 'grunt-contrib-sass'
#   grunt.loadNpmTasks 'grunt-ng-annotate'
#   grunt.loadNpmTasks 'grunt-haml'
#   grunt.loadNpmTasks 'grunt-concurrent'
  
#   # Default task(s).
#   grunt.registerTask 'default', ['concurrent:cwatch']
#   return
