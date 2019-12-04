const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const minifyCss = require('minify-css');

gulp.task('hello', function(done) {
  console.log('Привет, мир!');
  done();
});

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch("./*.css").on('change', browserSync.reload);
});

// Minify CSS
gulp.task('minify-css', function () {
  return gulp.src('./*.css') // пути к файлам .css
    .pipe(minifyCss({keepBreaks:true}))
    .pipe(gulp.dest('./css/'))
});
