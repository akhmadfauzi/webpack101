const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    mode:'development',
    entry:{
        app: './src/index.js',
    },
    devServer:{
        contentBase: './dist',
        hot: true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
 
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool:'inline-source-map'
};