var path = require('path');
var config = {
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline'
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'csslint?failOnWarning=false',
                exclude: /node_modules/
            }
        ],
    }
};

module.exports = config;
