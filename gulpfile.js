'use strict';

const gulp = require('gulp'),
	del = require('del'),
	pug = require('gulp-pug'),
	imagemin = require('gulp-imagemin'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	groupcmq = require('gulp-group-css-media-queries'),
	sourcemaps = require('gulp-sourcemaps'),
	fs = require('fs'),
	minify = require('gulp-minify'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync').create();

/* settings */
const dirBuild = 'build',
	dirSrc = 'src',
	path = {
		build: {
			html: dirBuild,
			css: dirBuild,
			pug: dirSrc + '/template',
			fonts: dirBuild + '/fonts',
			favicon: dirBuild + '/favicon',
			img: dirBuild + '/img',
			js: dirBuild + '/js'
		},
		src: {
			html: dirSrc + '/template/!(header|sprite|footer|layout).html',
			css: dirSrc + '/css/style.scss',
			pug: dirSrc + '/pug/**/*.pug',
			fonts: dirSrc + '/fonts/**/*',
			favicon: dirSrc + '/favicon/*',
			img: dirSrc + '/img/**/*',
			js: dirSrc + '/js/script.js',
			data: dirSrc + '/data/data.json'
		},
		watch: {
			html: dirSrc + '/template/**/*.html',
			css: dirSrc + '/css/**/*.scss',
			pug: dirSrc + '/pug/**/*.pug',
			fonts: dirSrc + '/fonts/**/*',
			favicon: dirSrc + '/favicon/*',
			img: dirSrc + '/img/**/*',
			js: dirSrc + '/js/**/*.js',
			data: dirSrc + '/data/**/*.json'
		}
	};

/* clear build dir */
function clean() {
	return del(dirBuild + '/**');
}

/* coplite sass */
function gulpSass() {
	return gulp.src(path.src.css)
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		})
		.on('error', sass.logError))
		.pipe(groupcmq())
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserslist: ['> 0.4%, last 4 versions, firefox >= 52, edge >= 16, ie >= 11, safari >=10']
		}))
		.pipe(gulp.dest(path.build.css))
		.pipe(cleanCSS())
		.pipe(rename('style.min.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(path.build.css));
}

/* copy fonts in build dir */
function gulpFonts() {
	return gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts));
}


/* coplite pug files in html folder */
function gulpPug() {
	const dataFromFile = JSON.parse(fs.readFileSync(path.src.data));
	return gulp.src(path.src.pug)
		.pipe(pug({
			pretty: true,
			locals: dataFromFile || {}
		}))
		.pipe(gulp.dest(path.build.pug));
}

/* copy html in build dir */
function gulpHTML() {
	return gulp.src(path.src.html)
		.pipe(gulp.dest(path.build.html));
}

/* optimize images */
function gulpImages() {
	return gulp.src(path.src.img)
		.pipe(imagemin([
			imagemin.mozjpeg({quality: 90, progressive: true}),
			imagemin.optipng(),
			imagemin.svgo()
		]))
		.pipe(gulp.dest(path.build.img));
}

/* copy favicon in build dir */
function gulpFavicon() {
	return gulp.src(path.src.favicon)
		.pipe(gulp.dest(path.build.favicon));
}

/* compile js bundle */
function gulpJS() {
	return gulp.src(path.src.js)
		.pipe(sourcemaps.init())
		.pipe(minify({
			ext: {
				min: '.min.js'
			}
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(path.build.js));
}

/* watch src files and show changes in browser */
function gulpWatch() {
	browserSync.init({
		server: './'+dirBuild
	});

	gulp.watch(path.watch.css, gulp.series(gulpSass));
	gulp.watch(path.watch.fonts, gulp.series(gulpFonts));
	gulp.watch(path.watch.pug, gulp.series(gulpPug));
	gulp.watch(path.watch.html, gulp.series(gulpHTML));
	gulp.watch(path.watch.img, gulp.series(gulpImages));
	gulp.watch(path.watch.favicon, gulp.series(gulpFavicon));
	gulp.watch(path.watch.js, gulp.series(gulpJS));
	gulp.watch(path.watch.data, gulp.series(gulpPug));
}

const dev = gulp.series(clean, gulp.parallel(gulpSass, gulpHTML, gulpPug, gulpFonts, gulpFavicon, gulpJS, gulpImages)),
	build = gulp.series(clean, gulp.parallel(gulpSass, gulpHTML, gulpFonts, gulpFavicon, gulpJS, gulpImages));

exports.default = build;
exports.watch = gulp.series(build, gulpWatch);
exports.dev = gulp.series(dev, gulpWatch);
exports.clean = clean;
exports.js = gulpJS;
exports.img = gulpImages;
exports.fonts = gulpFonts;
