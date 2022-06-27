import { URL } from 'url';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const projDir = path.join(new URL('.', import.meta.url).pathname, 'packages/consumer');
const outDir = path.join(projDir, '_web');
const srcDir = path.join(projDir, '');
const tplDir = path.join(projDir, 'pages');

const entries = ['./pages/MainPage/MainPage.tsx'];

export default {
    mode: 'development',
    entry: entries,
    context: srcDir,
    output: {
        path: outDir,
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: 'ejs-compiled-loader',
                        options: {
                            htmlmin: false,
                            htmlminOptions: {
                                removeComments: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(tplDir, 'MainPage/MainPage.ejs'),
            filename: './[name].hbs',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'chunk-vendor',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial',
                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true,
                },
            },
        },
    },
    devServer: {
        static: {
            directory: tplDir,
        },
        compress: true,
        port: 9000,
    },
};
