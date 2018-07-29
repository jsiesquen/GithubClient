const htmlWebpack = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8050
    },
    plugins: [
        new htmlWebpack({
            template: './src/index.html'
        })
    ]
}