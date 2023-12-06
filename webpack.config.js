import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import glob from 'glob';
import { PurgeCSSPlugin } from 'purgecss-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const response = await fetch("https://rickandmortyapi.com/api/character?page=8");
const data = await response.json();
// let views = fs.readdirSync('./src/views', {withFileTypes: true});
// views = views.filter(view => viewsisFile());
// let htmlPlugins = [];
// for(let view of views){
//     htmlPlugins.push(new HtmlWebpackPlugin({
//         filename: path.parse(view.name).name + 'html',
//         template: './src/views/' + view.name,
//         templateParameters: {
//             fullname: 'Katarina Kivimaa',
//             items: ['vorst', 'vodka', 'leib', 'margariin'],
//             chars: data.results
//         }
//     }))
// }



export default {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        historyApiFallback: true,
        open: true,
        port: 9000,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            },
            {
                test: /\.nunjucks$/i,
                use: ['simple-nunjucks-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: '200.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
        // new PurgeCSSPlugin({
        //     paths: glob.sync(`src/views/**/*`, { nodir: true }),
        // }),
        new VueLoaderPlugin()
    ],
}