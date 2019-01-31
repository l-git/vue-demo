var path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports={
    mode:'development',
    entry:{
        index:'./src/index.js',
        print:'./src/print.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[hash].js',
        chunkFilename: '[name].[contenthash].js',
    },
    devServer: {
             contentBase: './dist'
           }
    ,module:{
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
              },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader'
                ]
              }
              , {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
              },
              {
                test: /\.vue$/,
                loader: 'vue-loader'
              }
        ]
    },
    resolve: {
        alias: {
          'vue': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
            '@':path.resolve(__dirname,'src')
        }
      }
    ,plugins:[
        new webpack.ProvidePlugin({
                   _: 'lodash'
                 }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
                   title: 'Output Management'
                   ,template:'index.template.html'
        }),
        new VueLoaderPlugin(),
        new ExtractTextPlugin("styles.css"),
    ]

}