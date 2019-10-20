var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',function(){
    return gulp.src('css/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('../css'));
})

gulp.task('move',function(){
    return gulp.src('img/**/*')
        .pipe(gulp.dest('../img/'));
});

gulp.task('watch', function(){
    gulp.watch('css/**/*.scss', gulp.series('sass','move'))
})