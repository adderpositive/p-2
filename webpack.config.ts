import path from 'path'

export default {
  entry: './app/client.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    port: 3001,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/': '' }
      }
    }
  }
}
