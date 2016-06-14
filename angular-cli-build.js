const Angular2App = require('angular-cli/lib/broccoli/angular2-app');
const compileSass = require('broccoli-sass');
const compileCSS = require('broccoli-postcss');
const cssNext = require('postcss-cssnext');
const cssNano = require('cssnano');
const mergeTrees = require('broccoli-merge-trees');
const _ = require('lodash');
const glob = require('glob');

var options = {
    plugins: [
        {
            module: cssNext,
            options: {
                browsers: ['> 1%'],
                warnForDuplicates: false
            }
        },
        {
            module: cssNano,
            options: {
                safe: true,
                sourcemap: true
            }
        }
    ]
};


module.exports = function (defaults) {
    let appTree = new Angular2App(defaults, {
        sassCompiler: {
            cacheExclude: [/\/_[^\/]+$/]
        },
        vendorNpmFiles: [
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'zone.js/dist/**/*.+(js|js.map)',
            'es6-shim/es6-shim.js',
            'reflect-metadata/**/*.+(js|js.map)',
            'rxjs/**/*.+(js|js.map)',
            '@angular/**/*.+(js|js.map)',
            '@angular2-material/**/*.js'
        ]
    });

    let sass = mergeTrees(_.map(glob.sync('src/**/*.scss'), function (sassFile) {
        sassFile = sassFile.replace('src/', '');
        return compileSass(['src'], sassFile, sassFile.replace(/.scss$/, '.css'));
    }));

    let css = compileCSS(sass, options);

    return mergeTrees([appTree, sass, css], {overwrite: true});
};
