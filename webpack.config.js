const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let entry = {
    index: './src/scripts/index.js'
}

let output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
}

let loaders = {
    rules: [{
            test: /\.(html)$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }]
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'sass-loader']
            })
        },
        {
            test: /\.m?js$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'bower_components')
            ],
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: 'jQuery'
            }, {
                loader: 'expose-loader',
                options: '$'
            }]
        },
        {
            test: require.resolve('dayjs'),
            use: [{
                loader: 'expose-loader',
                options: 'dayjs'
            }]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/img'
                    }
                },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 85
                        },
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        }
                    }
                }
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    outputPath: 'assets/fonts/'
                }
            }]
        }

    ]

}

let resolve = {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
    mainFields: ['loader', 'main']
}

let optimization = {
    minimizer: [new UglifyJsPlugin()]
}

let plugins = [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
        title: 'Darin Buzon',
        template: './src/index.html',
        minify: true
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer()
            ]
        }
    }),
    new ExtractTextPlugin('style.css'),
    //new FaviconsWebpackPlugin('./favicon.svg'),
    new CleanWebpackPlugin(['build'])
    //new BundleAnalyzerPlugin()
]

module.exports = {
    entry: entry,
    output: output,
    module: loaders,
    resolveLoader: resolve,
    optimization: optimization,
    plugins: plugins,
    devtool: 'source-map'
}