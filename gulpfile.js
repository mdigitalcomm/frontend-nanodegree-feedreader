// Include Gulp
var gulp = require('gulp');

// Include Plugins
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');

gulp.task('styles', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('app/css'))
	.pipe(gulp.dest('dist/css'));
	
});

gulp.task('fonts', function() {
	gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy-jasmine', function() {
	gulp.src('app/jasmine/**/*')
		.pipe(gulp.dest('dist/jasmine'));
});

gulp.task('js', function() {
	gulp.src('app/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy-html', function() {
	gulp.src('app/index.html')
		.pipe(gulp.dest('./dist'));
});

// copy all files to dist folder
gulp.task('copy', ['styles', 'fonts', 'copy-html', 'js', 'copy-jasmine']);


//Serve and reload on changes to html and js files
gulp.task('serve',['copy'], function() {
	gulp.watch('app/index.html', ['copy-html']);
	gulp.watch('app/jasmine/**/*.js', ['copy-jasmine']);	
	gulp.watch('app/**/*.js').on('change', browserSync.reload);
	gulp.watch('app/index.html').on('change', browserSync.reload);
	browserSync.init({
		server: {
			baseDir: './app'
		},
	})
});