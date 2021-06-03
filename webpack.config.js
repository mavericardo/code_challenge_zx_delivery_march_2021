const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ReactRefreshWebPackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname,'src','index.jsx'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.resolve(__dirname,'public'),
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new ReactRefreshWebPackPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                    options: {
                        plugins: [
                            require.resolve('react-refresh/babel')
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    }
};