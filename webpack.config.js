const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack'); // 新增
const path = require('path');
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {   loader: "babel-loader" }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {  loader: "style-loader"  },
                    {  loader: "css-loader"  },
                    {
                        loader: "less-loader",
                        options: { javascriptEnabled: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {  loader: "style-loader"  },
                    {  loader: "css-loader"  }
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    {  loader: "style-loader"  },
                    {  loader: "css-loader"  },
                    {  loader: "sass-loader"  },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {  loader: "style-loader"  },
                    {  loader: "css-loader"  },
                    {  loader: "sass-loader"  },
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                use:[
                    {
                        loader: 'url-loader?limit=8192'
                    }
                ]
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                use:[
                    {
                        loader: 'file-loader'
                    }
                ]

            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.NamedModulesPlugin(), // 新增
        new webpack.HotModuleReplacementPlugin() //新增
    ],
    devServer: {
        contentBase: require('path').join(__dirname, "dist"),
        compress: true,
        port: 8033,
        host: "127.0.0.1",
        hot: true // 新增
    }
};
