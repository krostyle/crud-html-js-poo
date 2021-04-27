const HtmlWPP = require('html-webpack-plugin')



module.exports = {
    mode: 'production',
    output: {
        filename: 'index.[contenthash].js',
        clean: true
    },
    module: {
        rules: [{
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: true,
                    sources: false
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWPP({
            template: './src/index.html',
            filename: './index.html'
        }),

    ]

}