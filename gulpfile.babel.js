'use strict';

import gulp         from 'gulp';
import browserify   from 'browserify';
import babelify     from 'babelify'; 
import source       from 'vinyl-source-stream';

let paths = {
	main: 'src/main.js',
	scripts: ['src/**/*.js'],
	dist: 'dist'
}

gulp.task('copy', () => {
	let stream = gulp.src('src/**/*.html') 
    .pipe(gulp.dest(paths.dist));
    return stream;
});


gulp.task('build', () => {

	let b = browserify({
		debug: true,
		entries: './src/main.js',
		transform: [babelify]
	});

	let stream = b.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest(paths.dist));

	return stream;
});

let watch = () => {
  gulp.watch(paths.scripts, ['build']);
  gulp.watch('src/**/*.html', ['copy']);
}

gulp.task('watch', watch());

gulp.task('default', ['build', 'copy', 'watch']);
