const gulpif = require("gulp-if");

 // Processing Font
const font = () => {
    return $.gulp.src($.path.font.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: "Font",
                message: error.message
            }))
        }))
        .pipe($.gp.newer($.path.font.dest))  
        .pipe(gulpif($.app.isProd,$.gp.fonter($.app.fonter)))    
        .pipe($.gulp.dest($.path.font.dest))
        .pipe(gulpif($.app.isProd,$.gp.ttf2woff2()))
        .pipe($.gulp.dest($.path.font.dest)); 
}

module.exports = font;