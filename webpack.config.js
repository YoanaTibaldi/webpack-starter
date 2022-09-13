const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
//para que el archivo que se crea en el plugin (que se suma) no se acumule
    output: {
        clean: true
    },


    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]

            },
            {
                test: /\.(png| jpe?g|gif)/,
                loader: 'file-loader'
            }

        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi WebPack',
            //filename: 'hola.html',
            template: './src/index.html'

        }),

        new MiniCssExtractPlugin({
            //el fullhash es para que los usuarios no guarden el cache de los archivos
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: "src/assets/", to: "assets/" },
    
              ]
        })
    ]


}