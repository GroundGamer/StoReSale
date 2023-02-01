import webpack from 'webpack'

import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolve } from './buildResolve'
import { buildDevServer } from './buildDevServer'

import type { BuildOptions } from './types/config'


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const { mode, paths, isDev } = options

    const { entry, build } = paths


    return {
        mode,
        entry,
        output: {
            filename: '[name].[contenthash].js',
            path: build,
            clean: true
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolve(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}