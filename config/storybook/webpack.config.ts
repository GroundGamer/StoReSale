import path from 'path'

import webpack, { DefinePlugin } from 'webpack'

import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSVGLoader } from '../build/loaders/buildSVGLoader'


import type { BuildPaths } from '../build/types/config'


interface Props {
    config: webpack.Configuration
}

export default (props: Props) => {
    const { config } = props

    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i
            }
        }

        return rule
    })

    config.module.rules.push(buildSVGLoader())
    config.module.rules.push(buildCssLoader(true))

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true
    }))

    return config
}