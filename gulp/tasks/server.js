var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../config').webpack.config;

gulp.task('hotLoader',function(){
    new WebpackDevServer(webpack(config), {
        publicPath:config.output.publicPath,
        hot: true,
        inline:true,
        noInfo: false,
        historyApiFallback: true
    }).listen(3000, '127.0.0.1', function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:3000');
    });
});
