const Path = require("path");

module.exports = {
    entry: Path.resolve(__dirname, "src", "index.js"),
    output: {
        path: Path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: Path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
};
