const CopyPlugin = require('copy-webpack-plugin')
/*
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  entry: {
    main: './src/index.tsx' // 配置项目入口文件
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: {
                  'postcss-windicss': {}
                }
              }
            }
          }
        ],
        type: 'css'
      }
    ]
  },
  builtins: {
    html: [
      {
        template: './index.html' // 对齐 CRA 生成index.html
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'public',
        to: '.'
      }
    ])
  ] // 将 public 目录下的文件复制到 dist 目录下，对齐 CRA 的行为
}
