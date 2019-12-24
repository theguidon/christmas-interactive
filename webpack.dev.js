const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // https://webpack.js.org/concepts/entry-points/#multi-page-application
    entry: {
        index: './src/resources/scripts/index.js',
    },

    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        port: 8080,
        open: true
    },

    resolve: {
        alias: {
            Images: path.resolve(__dirname, "src/resources/images"),
            Styles: path.resolve(__dirname, "src/resources/stylesheets"),
        }
    },
    // https://webpack.js.org/concepts/plugins/
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                // Now we apply rule for images
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                use: [
                    {
                        // Using file-loader for these files
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            esModule: false,
                        }
                    }
                ]
            },
            // {
            //     // Now we apply rule for images
            //     test: /\.webp$/,
            //     use: [
            //         {
            //             // Using file-loader for these files
            //             loader: "webp-loader",
            //         }
            //     ]
            // },
            {
                // Apply rule for fonts files
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        // Using file-loader too
                        loader: "file-loader",
                        options: {
                            // THIS will resolve relative URLs to reference from the app/ directory
                            root: path.resolve(__dirname, 'src')
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {

                        loader: "url-loader",
                        options: {
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
                            root: path.resolve(__dirname, 'src'),
                            attrs: [':data-src'],
                            minimize: true,
                            esModule: false
                        }
                    }
                ]
            }
        ]
    }

};