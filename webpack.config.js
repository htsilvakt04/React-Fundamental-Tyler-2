const path = require('path');
const HTML = require('html-webpack-plugin');
module.exports = {
    entry: './app/index.js',
    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: 'silva.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new HTML({
            template: './app/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true
    }

};