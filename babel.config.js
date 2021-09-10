const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "10",
                chrome: "64",
                firefox: "60",
                safari: "11.1"
            },
            useBuiltIns: "usage",
            corejs: 3
        },
        "stage-0"
    ]
]

const plugins = ["@babel/plugin-transform-runtime"]

module.exports = { presets, plugins };
