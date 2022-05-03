const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebpackBar = require('webpackbar');
const paths = require('./paths');
const { NODE_ENV, moduleFileExtensions } = require('./constants');

const isEnvDevelopment = NODE_ENV === 'development';
// const isEnvProduction = NODE_ENV === 'production';
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

console.log(NODE_ENV);
module.exports = {
  entry: paths.appIndexJs,
  resolve: {
    extensions: moduleFileExtensions.map((ext) => `.${ext}`),
    alias: {
      src: paths.appSrc,
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-runtime']],
          },
        },
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'postcss-loader', options: { postcssOptions: { plugins: [['autoprefixer']] } } },
        ],
      },
      {
        test: cssModuleRegex,
        use: [
          isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: isEnvDevelopment ? '[local]--[hash:base64:5]' : '[name]__[hash:base64:6]',
              },
            },
          },
          { loader: 'postcss-loader', options: { postcssOptions: { plugins: [['autoprefixer']] } } },
        ],
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: [
          isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'postcss-loader', options: { postcssOptions: { plugins: [['autoprefixer']] } } },
          'sass-loader',
        ],
      },
      {
        test: sassModuleRegex,
        use: [
          isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: isEnvDevelopment ? '[local]--[hash:base64:5]' : '[name]__[hash:base64:6]',
              },
            },
          },
          { loader: 'postcss-loader', options: { postcssOptions: { plugins: [['autoprefixer']] } } },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[contenthash][ext]',
        },
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[contenthash][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: paths.appHtml, filename: 'index.html', inject: 'body' }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: paths.appPublic,
          from: '*',
          to: paths.appBuild,
          toType: 'dir',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new WebpackBar({
      name: isEnvDevelopment ? 'RUNNING' : 'BUNDLING',
      color: isEnvDevelopment ? '#52c41a' : '#722ed1',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: paths.appTsConfig,
      },
    }),
  ],
};
