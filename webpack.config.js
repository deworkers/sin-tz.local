const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, './src/themes/'),
    entry: {
        main: './main.js',
    },
    output: {
        path: path.resolve(__dirname, './build/'),
        publicPath: '/build/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
	                            importLoaders: 1,
	                            sourceMap: true
	                        }
                        },
                        {
                            loader: 'less-loader',
	                        options: {
	                            sourceMap: true
	                        }
                        }
                    ],
                    fallback: ["style-loader"]
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devtool: 'source-map'
};