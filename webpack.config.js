var path         = require( 'path' );
var webpack      = require( 'webpack' );
var autoprefixer = require( 'autoprefixer' );

var config = {
    entry: {
        main: './js/main.js'
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        chunkFilename: '[id].bundle.js'
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
                loaders: [ 'style', 'css', 'postcss' ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [ 'style', 'css', 'postcss', 'sass' ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=1024',
                    'image-webpack?{progressive:true,optimizationLevel:7,interlaced:false,pngquant:{quality:"65-90",speed:4}}'
                ]
            }
        ]
    },
    postcss: function () {
        return [
            autoprefixer( {
                browsers: [
                    'Chrome >= 35',
                    'Firefox >= 38',
                    'Edge >= 12',
                    'Explorer >= 9',
                    'iOS >= 8',
                    'Safari >= 8',
                    'Android 2.3',
                    'Android >= 4',
                    'Opera >= 12'
                ]
            } )
        ];
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( 'main', null, false ),
        new webpack.optimize.UglifyJsPlugin( { output: { comments: false } } )
    ],
    devtool: 'source-map'
};

module.exports = config;
