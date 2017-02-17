module.exports = (grunt) ->
  grunt.initConfig
  # получает объект
    pkg: grunt.file.readJSON('package.json'),
    coffee:
      options: 
      	bare: true
        # target - могут иметь любые имена. подзадачи 
      scripts:
      # для компиляции всх скриптов
      # будут меняться разрешение с coffe на js
      	expand: true
      	# чтобы все добавления работали
      	flatten: true
      	cwd: 'coffee/'
      	# откуда брать файлы
      	src: ['*.coffee']
      	dest: 'js/'
      	# destination - место назначения
      	# в какую папку засовывать
      	ext: '.js'
      	# какой тип получать
    watch:
    	options:
    		# при изменение перезагрузка браузера 
    		# настроики
    		liverload: true
    	scripts:
    		files: ['coffee/*.coffee']
    		# следим за всеми файлами из папки coffee
    		tasks: ['process']
        # при их изменении вызывать
    concat:
      dist:
        src: ['js/*.js']
        dest: 'dist/js/all.js'
    uglify:
      options:
        banner: "что написанно в минифицфайле"
      dist:
        files:'dist/js/all.min.js': ['dist/js/all.js']
# минифицируем
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-newer'
  # перекомпиляция только одно файла
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  
  grunt.registerTask 'process', ['newer:coffee', 'concat','uglify']
  grunt.registerTask 'default', ['coffee', 'concat','uglify','watch']
  # задачи по умолчанию
  return
