const path = require('path');

module.exports = {
    entry: './js/src/main.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(m?js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}