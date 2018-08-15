module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "freeIndexer.min.js",
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: "awesome-typescript-loader"}
        ]
    }
};