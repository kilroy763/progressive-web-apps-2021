const gulp = require('gulp')
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

return gulp.src([
    "./src/css/*.css", // pak alle styles uit betreffende folder
  ])
    .pipe(concat("style.css")) // verwijder style.css
    .pipe(cleanCSS({compatibility: 'ie8'})) // minify en creeer nieuwe style.css
    .pipe(gulp.dest("public/css")) // plaats bestand in destination

// source https://www.npmjs.com/package/gulp-clean-css