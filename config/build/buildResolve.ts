import webpack from 'webpack'


import type { BuildOptions } from './types/config'


export function buildResolve(options: BuildOptions): webpack.ResolveOptions {

    const { paths } = options

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            paths.src,
            'node_modules'
        ],
        mainFiles: ['index'],
        alias: {}
    }
}