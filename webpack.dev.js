import { URL } from 'url';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackInjector from 'html-webpack-injector';

const projDir = path.join(new URL('.', import.meta.url).pathname, 'packages/consumer');
const outDir = path.join(projDir, '_web');
const srcDir = path.join(projDir, '');
const tplDir = path.join(outDir, 'pages');

const pages = ['MainPage'];

function getPageEntryPoints() {
    const obj = {};

    pages.forEach((pageName) => {
        //const templatePath = path.join('pages', pageName, pageName + '.tsx');
        const templatePath = `./pages/${pageName}/${pageName}.tsx`;
        obj[pageName] = templatePath;
    });

    return obj;
}

function getPagePlugins() {
    const arr = [];

    pages.forEach((pageName) => {
        /**
         * Пушим инстансы HtmlWebpackPlugin, поскольку
         * на каждую страницу требуется отдельный
         * экземпляр
         */
        arr.push(
            new HtmlWebpackPlugin({
                template: path.join('pages', pageName, pageName + '.ejs'),
                filename: path.join('views', pageName + '.hbs'),
                /**
                 * Название чанки (второй параметр) должно совпадать
                 * с названием страницы (расширение не указывается)
                 */
                //TODO сейчас не удается называть файлы по шаблону PageNameFront.js
                chunks: ['web', pageName],
            }),
        );

        /**
         * Плагин добавляет к странице ссылку на чанку
         */
        arr.push(new HtmlWebpackInjector());
    });

    return arr;
}

export default {
    mode: 'development',
    entry: {
        web: path.join(projDir, 'web.ts'),
        ...getPageEntryPoints(),
    },
    context: srcDir,
    output: {
        path: outDir,
        filename: 'js/[name].js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.web.json',
                        },
                    },
                ],
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
    plugins: [new CleanWebpackPlugin(), ...getPagePlugins()],
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendor-libs',
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
            directory: 'packages/consumer/_web',
        },
        compress: true,
        port: 9000,
    },
};
