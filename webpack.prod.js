const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const buildPath = path.resolve(__dirname, 'public');

module.exports = {

    // This option controls if and how source maps are generated.
    // https://webpack.js.org/configuration/devtool/
    devtool: 'source-map',

    // https://webpack.js.org/concepts/entry-points/#multi-page-application
    entry: {
        index: './src/resources/scripts/index.js',
    },

    // how to write the compiled files to disk
    // https://webpack.js.org/concepts/output/
    output: {
        filename: '[name].[hash:20].js',
        path: buildPath
    },

    resolve: {
        alias: {
            Images: path.resolve(__dirname, "src/resources/images"),
            Styles: path.resolve(__dirname, "src/resources/stylesheets"),
        }
    },

    // https://webpack.js.org/concepts/loaders/
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                // Now we apply rule for images
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        // Using file-loader for these files
                        // loader: "file-loader",
                        loader: "file-loader?name=/public/icons/[name].[ext]",
                        // In options we can set different things like format
                        // and directory to save
                        options: {
                            outputPath: 'resources/images',
                            publicPath: 'resources/images',
                            regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/i,
                            name: '[name].[ext]',
                            esModule: false
                        }
                    }
                ]
            },
            {
                // Now we apply rule for images
                test: /\.webp$/,
                use: [
                    {
                        // Using file-loader for these files
                        loader: "webp-loader",
                    }
                ]
            },
            {
                // Apply rule for fonts files
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        // Using file-loader too
                        loader: "file-loader",
                        options: {
                            outputPath: 'resources/fonts',
                            publicPath: 'resources/fonts',
                            // THIS will resolve relative URLs to reference from the src/ directory
                            root: path.resolve(__dirname, 'src')
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // THIS will resolve relative URLs to reference from the src/ directory
                            root: path.resolve(__dirname, 'src')
                        }
                    }
                ]
            },
            {
                test: /\.mp3$/,
                use: [
                    {

                        loader: "file-loader",
                        options: {
                            outputPath: 'resources/sounds',
                            publicPath: 'resources/sounds',
                            root: path.resolve(__dirname, 'src')
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    // ...The other file-loader and extract-loader go here.
                    {
                        loader: 'html-loader',
                        options: {
                            // THIS will resolve relative URLs to reference from the src/ directory
                            root: path.resolve(__dirname, 'src')
                        }
                    }
                ]
            }
        ]
    },

    // https://webpack.js.org/concepts/plugins/
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            chunks: ['index'],
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "resources/stylesheets/[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        })
    ],

    // https://webpack.js.org/configuration/optimization/
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    }
};