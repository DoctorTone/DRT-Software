var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('build', function() {
    return gulp.src("./js/drt.js")
        .pipe(babel())
        .pipe(gulp.dest("dist/js/"))
});

gulp.task('copy', function() {
    gulp.src("index.html")
        .pipe(gulp.dest('dist'));
    gulp.src("css/*.css")
        .pipe(gulp.dest("dist/css/"))
});

