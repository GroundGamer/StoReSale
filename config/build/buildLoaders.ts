import webpack from 'webpack'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'


import type { BuildOptions } from './types/config'


export function buildLoaders(options: BuildOptions): Array<webpack.RuleSetRule> {

    const { isDev } = options

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Создает узлы `style` из строк JS
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Переводит CSS в CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName:
                            isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    }
                }
            },
            // Компилирует Sass в CSS
            "sass-loader",
        ],
    }

    /* Если не используем typescript - нужен babel-loader для "*.js" файлов */
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
    

    return [
        typescriptLoader,
        cssLoader,
    ]
}