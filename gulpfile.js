// including plugins

//var del = require('del')
var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var less = require('gulp-less');
var babel = require('gulp-babel');
var postcss = require('gulp-postcss')
var cleanCSS = require('gulp-clean-css')	
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var path = require('path')

gulp.task('css-main', function(){
	return gulp.src(
		['./public/css/bootstrap.css',
		'./public/css/Pe-icon-7-stroke.css',
		'./public/css/font-awesome.min.css',
		'./public/css/animate.css',
		'./public/css/responsive.css',
		'./public/css/style.css']
		)
	.pipe(minifyCSS())
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gp_concat('style.min.css'))
    .pipe(gulp.dest('./public/dist/css/'))
})

gulp.task('copy-fonts', function(){
	return gulp.src(
		['./public/fonts/**']
		)
    .pipe(gulp.dest('./public/dist/fonts/'))
})

gulp.task('copy-images', function(){
	return gulp.src(
		['./public/images/**']
		)
    .pipe(gulp.dest('./public/dist/images/'))

})


//gulp.task('style', ['css-main', 'copy-fonts', 'copy-images'], function(){})
