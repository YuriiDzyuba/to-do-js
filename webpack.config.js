const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production' // определяем в каком режиме разработки находимся prod or dev
const isDev = !isProd // данное значение присваивается в package.json перед запуском

const filename = (ext) => isDev ? ` bundle.${ext}` : ` bundle.[hash].${ext}` // генерируем имя файлов в зависимости с режимом разработки

console.log(isDev, 'isDev')
console.log(isProd, 'isProd')

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ]

  if (isDev) {
    loaders.push('eslint-loader')
  }


  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'scc'),
      '@core': path.resolve(__dirname, 'src/core'),
    },
  },
  // devtool: isDev ? "source-map" : false,          //https://webpack.js.org/configuration/devtool/#qualities
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: isProd, // удаляет коментарии в зависимости от режима разработки
        collapseWhitespace: isProd, // удаляет пробелы в зависимости от режима разработки
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
}
