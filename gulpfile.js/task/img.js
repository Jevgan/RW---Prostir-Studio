   

// Processing IMG
const img = () => {
    return $.gulp.src($.path.img.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: "Image",
                message: error.message
            }))
        }))
        .pipe($.gp.newer($.path.img.dest))  
        .pipe($.gulp.dest($.path.img.dest))
        .pipe($.gulp.src($.path.img.src))
        .pipe($.gp.newer($.path.img.dest))   
        .pipe($.gulp.dest($.path.img.dest));

}

module.exports = img;