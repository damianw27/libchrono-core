const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    globalObject: 'this',
    library: {
      name: 'libchrono',
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    plugins: [
      new TSConfigPathsPlugin(),
    ],
    fallback: {
      util: require.resolve("util/"),
      assert: require.resolve("assert/")
    }
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json'
          }
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: "./tsconfig.json",
        mode: "write-dts",
      }
    }),
    new UglifyJsPlugin(),
    new ESLintPlugin(),
    new CompressionPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        // sourceMap: shouldUseSourceMap,
      }),
    ],
  },
};
