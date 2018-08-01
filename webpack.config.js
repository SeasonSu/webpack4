const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack'); // 新增
const path = require('path');
const srcPath = path.join(__dirname, 'src');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {  loader: "babel-loader" }
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    {   loader : "css-hot-loader" },
                    {   loader: "style-loader"  },
                    {
                        loader: "css-loader",
                        options: {
                            modules:true,
                            importLoaders:1,
                            localIdentName:'[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                             javascriptEnabled: true,
                             noIeCompat: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                include: /node_modules/,
                use: [
                    {   loader : "css-hot-loader" },
                    {   loader: "style-loader"  },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader",
                        options: {
                             javascriptEnabled: true,
                             noIeCompat: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {   loader : "css-hot-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules:true,
                            importLoaders:1,
                            localIdentName:'[name]__[local]___[hash:base64:5]'
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    {   loader : "css-hot-loader" },
                    {
                        loader: "css-loader"
                    },
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
        new webpack.HotModuleReplacementPlugin(), //新增
        new webpack.DefinePlugin({
            isProd: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'prod') || 'false'))
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx','less','scss'],
        alias: {
            assets: `${srcPath}/assets/`,
            components: `${srcPath}/components/`,
            router: `${srcPath}/router/`,
            mock: `${srcPath}/mock/`,
            pages: `${srcPath}/pages/`,
            models: `${srcPath}/models/`,
            services: `${srcPath}/services/`,
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
