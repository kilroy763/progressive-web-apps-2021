const gulp = require('gulp')
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

return gulp.src([
    "./src/css/*.css",
  ])
    .pipe(concat("style.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("public/css"))

// source https://www.npmjs.com/package/gulp-clean-css