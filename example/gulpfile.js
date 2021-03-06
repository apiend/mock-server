var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var path = require('path');
var ROOT = path.resolve(__dirname);
var server = path.resolve(ROOT, 'src/mock');


// 监听文件
gulp.task('mock', ['nodemon'], function() {
    gulp.watch(['./src/mock/db.js', './src/mock/**'], ['bs-delay']);
});

// 延时刷新
gulp.task('bs-delay', function() {
    setTimeout(function() {
        console.log('restart');
    }, 1000);
});

// 服务器重启
gulp.task('nodemon', function(cb) {
    // 设个变量来防止重复重启
    var started = false;
    var stream = nodemon({
        script: './src/mock/server.js',
        // 监听文件的后缀
        ext: "js",
        env: {
            'NODE_ENV': 'development'
        },
        // 监听的路径
        watch: [
            server
        ]
    });
    stream.on('start', function() {
        if (!started) {
            cb();
            started = true;
        }
    }).on('crash', function() {
        console.error('Application has crashed!\n')
        stream.emit('restart', 10)
    })
});