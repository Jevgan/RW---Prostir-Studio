// Configuration 
 
// Plugins
// const SassGlob = require("gulp-sass-glob"); 
const sass = require('gulp-sass')(require('sass'));

// Processing SCSSfgfgfgffg
const scss = () => {
    $.app.isDev // console.log('Starting CSS task...');console.log('Destination path:', path.css.dest); ###Debug
    return $.gulp.src($.path.scss.src, { sourcemaps: $.app.isDev })
         .pipe($.gp.plumber({
              errorHandler: $.gp.notify.onError(error => ({
                  title: "SCSS",
                  message: error.message
              }))
          }))
        .pipe($.gp.sassGlob())
        .pipe(sass()) 
        .pipe($.gp.autoprefixer())
        .pipe($.gp.shorthand())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.size({ title: "main.css" }))
        .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
        .pipe($.gp.rename({ suffix: ".min" }))
        .pipe($.gp.csso())
        .pipe($.gp.size({ title: "main.min.css" }))
        .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
        .pipe($.browserSync.stream());
    // .on('end', () => console.log('CSS task finished.'));    ###Debug
}

module.exports = scss;