const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/server/server.ts',
    mode:'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/server'),
        clean:true
    },
    module: { rules: [{ test: /\.ts$/, use: 'ts-loader' }]},
    plugins: [],
    devServer: {
        static: './dist',
        port: 5500,
        hot:true
    }
}