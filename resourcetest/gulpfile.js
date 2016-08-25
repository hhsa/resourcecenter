// Requirements
var   gulp          = require('gulp'),
      postcss       = require('gulp-postcss'),
      cssimport     = require('postcss-import'),
      cssnext       = require('postcss-cssnext'),
      mqpacker      = require('css-mqpacker'),
      cssnano       = require('gulp-cssnano'),  
      imagemin      = require('gulp-imagemin');


// Tasks

// CSS compile
gulp.task('css', function () {
  var processors = [
      cssimport,
      cssnext({browsers: ['last 1 version']}),
      mqpacker,
      cssnano,
      ];
  return gulp.src('src/assets/css/style.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('dist/assets/css/'));   
});

// Image compression
gulp.task('images', function() {
  return gulp.src('src/assets/img/**/*.{jpg,png}')
    .pipe(imagemin({
        progressive: true
    }))
    .pipe(gulp.dest('dist/assets/img/'))
});

// Watch
gulp.task('watch', function(){
  gulp.watch('src/assets/css/*.css', ['css']); 
});