const gulp = require('gulp');
			pug2html = require('./gulp/tasks/pug');

//module.exports.pug2html = gulp.series(pug2html);
module.exports.dev = gulp.series(pug2html);