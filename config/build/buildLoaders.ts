import webpack from 'webpack'

import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSVGLoader } from './loaders/buildSVGLoader'


import type { BuildOptions } from './types/config'


export function buildLoaders(options: BuildOptions): Array<webpack.RuleSetRule> {

    const { isDev } = options


    const svgLoader = buildSVGLoader()

    const babelLoader = buildBabelLoader(options)

    const cssLoader = buildCssLoader(isDev)

    /* Если не используем typescript - нужен babel-loader для "*.js" файлов */
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: [{
            loader: 'ts-loader'
            /*options: {
                transpileOnly: true
            }*/
        }],
        exclude: /node_modules/
    }


    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }


    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ]
}