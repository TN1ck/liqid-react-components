var path = require('path');
var config = {
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[local]'
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
