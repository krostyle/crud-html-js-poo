const HtmlWPP = require('html-webpack-plugin')



module.exports = {
    mode: 'production',
    output: {
        filename: 'main.[contenthash].js',
        clean: true
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
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
            filename: './index.[contenthash].html'
        }),

    ]

}