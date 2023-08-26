global.$ = {
    // Packages
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    browserSync: require("browser-sync").create(),

    // Config
    path: require("./config/path.js"),
    app: require("./config/app.js")
}
const { watch } = require('gulp');


// Tasks
const requireDir = require("require-dir");
const task = requireDir("./task", { recurse: true }); 

// Updates Watcher
const watcher = () => {
    watch($.path.html.watch, task.html);
    watch($.path.scss.watch, task.scss);
    watch($.path.js.watch, task.js);
    watch($.path.img.watch, task.img);
    watch($.path.font.watch, task.font);
}


const build = $.gulp.series(
    task.clear,
    $.gulp.parallel(task.html, task.scss, task.js, task.img, task.font)
)


const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, task.server)
)

// Tasks 
exports.html = task.html;
exports.scss = task.scss;
exports.js = task.js;
exports.img = task.img;
exports.font = task.font;

// Assembly
exports.default = $.app.isProd
    ? build
    : dev;


