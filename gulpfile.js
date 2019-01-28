// Require Gulp first!
const gulp = require("gulp");
 sass = require('gulp-sass');
 autoprefixer = require('gulp-autoprefixer')
 prettyError = require('gulp-prettyerror');
 eslint = require("gulp-eslint"),
 uglifycss = require("gulp-uglifycss");
 browserSync = require('browser-sync').create();
 terser = require("gulp-terser"),
 rename = require("gulp-rename");


gulp.task("sass", function() {
  return gulp
    .src("./sass/*.scss") // What files do we want gulp to consume?
    .pipe(prettyError())
    .pipe(sass()) // Call the terser function on these files
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    })) // Rename the uglified file
    .pipe(gulp.dest("./build/css"))
    .pipe(uglifycss())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest("./build/css"));
});

gulp.task('scripts', function(){
    return gulp.src('./js/*.js')
      .pipe(terser())
      .pipe(rename({ extname: '.min.js' }))
      .pipe(gulp.dest('./build/js'))
  });

gulp.task('lint', () => {
    return src(['scripts/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(terser())
        .pipe(eslint.failAfterError());
});
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("app/*.html").on('change', browserSync.reload);
});
