
 
 // Processing CSS
const css = () => { 

    // console.log('Starting CSS task...');console.log('Destination path:', path.css.dest); ###Debug
    return $.gulp.src($.path.css.src, { sourcemaps:app.isDev })
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: "CSS",
                message: error.message
            }))
        }))  
        .pipe($.gp.concat("main.css"))
        // .on('error', console.error)   ###Debug
        .pipe($.gp.cssimport()) 
        .pipe($.gp.autoprefixer())
        .pipe($.gp.shorthand())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.size({ title: "main.css" }))
        .pipe($.gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
        .pipe($.gp.rename({ suffix: ".min" }))
        .pipe($.gp.csso())
        .pipe($.gp.size({ title: "main.min.css" }))
        .pipe($.gulp.dest($.path.css.dest, { sourcemaps: app.isDev }))
        // .on('end', () => console.log('CSS task finished.'));    ###Debug
}

module.exports = css;