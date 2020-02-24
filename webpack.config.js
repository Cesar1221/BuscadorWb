const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        buscador1: path.resolve(__dirname, 'src/js/index.js'),
        buscador2: path.resolve(__dirname, 'src/js/index.js')
},
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    resolve:{
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        hot: true,
        open: true,
        port: 9000,
      },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use:{
                    loader:'file-loader',
                
                options:{
                    name: '[name].[ext]',
                    outputPath: 'assets/'
                    }
                }
                    
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack-dev-server',
            template: path.resolve(__dirname, 'index.html')
        }),
    ]
}