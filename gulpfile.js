const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const sass = require('gulp-sass');


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
gulp.task('styles', function () {
  return gulp.src(['css/style.css']) // Выбираем файл для минификации
    .pipe(concat('style.css')) // Сжимаем
    .pipe(minifyCSS({keepBreaks: true}))
    .pipe(rename({ suffix: '.min' })) // Добавляем суффикс .min
    .pipe(gulp.dest('css')); // Выгружаем в папку css
});

// Подключаем SASS
gulp.task('sass', function () { // Создаем таск "sass"
  return gulp.src('sass/style.sass') // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('css')) // Выгружаем результата в папку app/css
});
