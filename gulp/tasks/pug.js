const												//Для записи каждого Task в один файл
	gulp = require('gulp');		//Подключаем gulp
	gulpPlumber = require('gulp-plumber');	//Подключаем модуль gulp-plumber
	gulpPug = require('gulp-pug');

module.exports = pug2html = () => {
		return gulp.src('dev/pug/pages/*.pug')
		.pipe(gulpPlumber())
		.pipe(gulpPug({
			pretty: false
		}))
		.pipe(gulpPlumber.stop())
		.pipe(gulp.dest('build'));
	}
