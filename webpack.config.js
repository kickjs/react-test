var path    = require( 'path' );
var webpack = require( 'webpack' );

var config = {
    entry: {
        main: "./js/main.js"
    },
    output: {
        path: __dirname + '/build',
        filename: "bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [ 'babel?presets[]=react,presets[]=es2015' ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [ 'style', 'css' ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [ 'style', 'css', 'sass' ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( 'main', null, false ),
        new webpack.optimize.UglifyJsPlugin( { output: { comments: false } } )
    ],
    devtool: 'source-map'
};

module.exports = config;
