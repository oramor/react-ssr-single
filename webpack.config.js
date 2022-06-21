import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = '/home/romaro/react-ssr-single/packages/consumer/';
const dstPath = __dirname + '_web';
const srcPath = __dirname + '';
const tplPath = __dirname + 'pages/MainPage';

export default {
    entry: './project/web.ts',
    context: srcPath,
    output: {
        path: dstPath,
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
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'main.html',
            filename: './main.html',
        }),
    ],
    devServer: {
        static: {
            directory: tplPath,
        },
        compress: true,
        port: 9000,
    },
};
