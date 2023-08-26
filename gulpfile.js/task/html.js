const gulpif =require("gulp-if");

// Processing HTML
const html = () => {
    return $.gulp.src($.path.html.src)
        .pipe($.gp.plumber({
             errorHandler: $.gp.notify.onError(error => ({
                  title: "HTML",
                  message: error.message
              }))
         }))
        .pipe($.gp.fileInclude())  
        .pipe(gulpif($.app.isProd,$.gp.size({
            title: "Before compression"
        })))
        .pipe($.gp.htmlmin($.app.htmlmin)) 
        .pipe(gulpif($.app.isProd,$.gp.size({
            title: "After compression"
        })))
        .pipe($.gulp.dest($.path.html.dest))
        .pipe(gulpif($.app.isDev,$.browserSync.stream()));
}

module.exports = html;