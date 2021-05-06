const path = require('path')

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js",
        publicPath: "/build/"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { 
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: path.resolve(__dirname, "tsconfig.webpack.json")
                        }
                    }
                ],
                exclude: /node_modules/,
            },
        ],
    },
};