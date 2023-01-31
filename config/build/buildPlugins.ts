import webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'


import type { BuildPaths } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'


export function buildPlugins(paths: BuildPaths): Array<webpack.WebpackPluginInstance> {
    const { html } = paths

    const plugins = [
        new HtmlWebpackPlugin({
            template: html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]

    return plugins
}