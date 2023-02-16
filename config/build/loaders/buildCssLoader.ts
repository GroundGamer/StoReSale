import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoader(isDev: boolean) {
    return {
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
            'sass-loader'
        ]
    }
}