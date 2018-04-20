const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack'); // 新增
const path = require('path');
const srcPath = path.join(__dirname, '/../src');
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
                    "style-loader",
                    "css-loader"
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
    resolve: {
        extensions: ['.js', '.jsx','less','scss'],
        alias: {
          rootPath:`${srcPath}`,
          components: `${srcPath}/components/`,
          reducers: `${srcPath}/reducers/`,
          router: `${srcPath}/router/`,
          sources: `${srcPath}/sources/`,
          stores: `${srcPath}/stores/`,
          utils: `${srcPath}/utils/`,
        }
    },
    devServer: {
        contentBase: require('path').join(__dirname, "dist"),
        compress: true,
        inline:true,
        port: 8033,
        hotOnly: true,
        historyApiFallback: true,
        // progress: true,
        host: "127.0.0.1",
        hot: true // 新增
    }
};
