import webpack from 'webpack'

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import HtmlWebpackPlugin from 'html-webpack-plugin'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'


import type { BuildOptions } from './types/config'


export function buildPlugins(options: BuildOptions): Array<webpack.WebpackPluginInstance> {
    const { paths, isDev, apiUrl, project } = options

    const { html } = paths


    const plugins = [
        new HtmlWebpackPlugin({
            template: html
        }),

        /*
            Плагин для отображения прогресса сборки
        */
        new webpack.ProgressPlugin(),

        /*
            Плагин для шифровки файла css
        */
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project)
        })
    ]

    if (isDev) {
        /*
            Для анализа пакетов
        */
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))
        /*
            Нужен для изменения кода и для плагина ниже
        */
        plugins.push(new ReactRefreshWebpackPlugin())
        /*
            Изменяет код не перезагружая страницу
        */
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    return plugins
}