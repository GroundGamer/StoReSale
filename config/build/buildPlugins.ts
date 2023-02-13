import webpack from 'webpack'

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import HtmlWebpackPlugin from 'html-webpack-plugin'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'


import type { BuildOptions } from './types/config'


export function buildPlugins(options: BuildOptions): Array<webpack.WebpackPluginInstance> {
    const { paths, isDev } = options

    const { html } = paths


    const plugins = [
        new HtmlWebpackPlugin({
            template: html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    return plugins
}