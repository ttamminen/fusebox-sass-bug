const { FuseBox, SVGPlugin, CSSPlugin, BabelPlugin, JSONPlugin, SassPlugin, TypeScriptHelpers, CSSResourcePlugin, UglifyJSPlugin, EnvPlugin } = require("fuse-box");

/*

    React app build configuration for developer machine. No minifications, optimizations, etc.

*/

const outFolder = "./AppvNext/out/"
const sourceMaps = true

let config = {
    homeDir: "AppvNext/",
    sourcemaps: sourceMaps,
    output: outFolder + "$name.min.js",
    shim: {
        moment: {
            exports: 'moment'
        },
        "lodash/clonedeep": {
            exports: '_.cloneDeep'
        },
        "lodash/mergewith": {
            exports: '_.mergeWith'
        },
        "lodash/isplainobject": {
            exports: '_.isPlainObject'
        },
        "lodash/foreach": {
            exports: '_.forEach'
        },
        "lodash/reduce": {
            exports: '_.reduce'
        },
        "lodash/omit": {
            exports: '_.omit'
        },
        "lodash/pick": {
            exports: '_.pick'
        }
    },
    plugins: [
        SVGPlugin(),
        [
          SassPlugin({ outputStyle: 'compressed' }),
          CSSPlugin()
        ],
        [
          /node_modules.*\.css$/, 
          CSSResourcePlugin({
            dist: outFolder + "vendor",
            resolve: (f) => `/vendor/${f}`
          }), CSSPlugin()],
        TypeScriptHelpers(),
        JSONPlugin(),
        BabelPlugin({
          config: {
              sourceMaps: sourceMaps,
              presets: ["es2015"]
          },
        })
    ]
};

let fuse = FuseBox.init(config);
fuse.bundle('app')
    .target('browser')
    .instructions(' > index.tsx')
fuse.run()