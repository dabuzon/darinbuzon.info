const path = require('path');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');
//const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let entry = {
    'build': './src/scripts/index.js',
    'about': './src/scripts/about.js'
}

let output = {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
}

let loaders = {
    rules: [{
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: [':data-src']
                }
            }
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ],
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
        }
    ]

}

let resolve = {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
    mainFields: ['loader', 'main']
}

let optimization = {
    minimizer: [new UglifyJsPlugin({
        cache: true,
        extractComments: true
    })]
}

let plugins = [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: true,
        chunks: ['build'],
        filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/about.html',
        minify: true,
        chunks: ['about'],
        filename: 'about.html'
    }),
    new MiniCssExtractPlugin({
        'build': devMode ? '[name].css' : '[name].[hash].css',
        'about': devMode ? '[id].css' : '[id].[hash].css'
    }),
    new OptimizeCSSAssetsPlugin({
        canPrint: true
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer()
            ]
        }
    }),
    //new FaviconsWebpackPlugin('./favicon.svg'),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
        openAnalyzer: false
    })
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