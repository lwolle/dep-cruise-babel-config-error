import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolvePath } from './resolvePath';

/**
 * getPageEntry gathers the bootstrap script and a specific page template
 */
const getPageEntry = (page, polyfills) =>
    [page].reduce(
        (entries, name) => ({
            ...entries,
            [name]: [
                polyfills,
                resolvePath(`pages/${ name }.jsx`),
            ],
        }),
        {},
    );

/**
 * The webpack config consists of a general part and a set of use-case specific presets
 */
export const webpackConfigFactory = buildPage => ({
      page = 'default',
      mode,
      ENV,
      ...cmdEnv
                                                  }) => {
    const targetPage = buildPage || page;
    const pathSuffix = targetPage === 'default' ? '' : `-${ targetPage }`;

    const env = {
        ...cmdEnv,
        ENV,
        page,
        mode,
    };

    // eslint-disable-next-line no-console
    console.log(env);

    const polyfills = resolvePath('src/polyfills.ts');

    return {
        mode,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
        entry: getPageEntry(targetPage, polyfills),
        devtool: 'eval-source-map',
        context: resolvePath('src'),
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        output: {
            filename: 'bundle.js',
            chunkFilename: '[name].chunk.js',
            path: resolvePath(`dist${ pathSuffix }`),
            publicPath: '/',
        },
        module: {
            rules: [...([
                {
                    exclude: /(node_modules|dist)/,
                    test: /\.(js|jsx|ts|tsx)$/,
                    loader: 'babel-loader',
                },
            ]),
                {
                    test: /\.css$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            // do not use css modules when loading global component styles
                            // options: {
                            //     modules: true,
                            // },
                        },
                    ],
                }
                , {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/',
                            },
                        },
                    ],
                }],
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: resolvePath('pages/default.html'),
                hash: true,
            }),
        ],
        devServer: {
            disableHostCheck: true,
            historyApiFallback: true,
            host: 'localhost',
            port: 9000,
        },
    }
};

export default webpackConfigFactory();
