import webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'


import type { BuildPaths } from './types/config'


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