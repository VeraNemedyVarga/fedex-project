module.exports = {
    context: __dirname + "/project/src/main/js",
    entry: "./index.js",
    output: {
        path: __dirname + "/project/src/main/resources/static/build/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                },
            },
        ]
    },
    plugins: []
}
