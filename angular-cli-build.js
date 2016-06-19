/*
'use strict';
const fs = require('fs');
const path = require('path');

// Import the require hook. Enables us to require TS files natively.
require('ts-node/register');

const Angular2App = require('angular-cli/lib/broccoli/angular2-app');
const Funnel = require('broccoli-funnel');
const MergeTree = require('broccoli-merge-trees');
const compileSass = require('broccoli-sass');
const compileCSS = require('broccoli-postcss');
const cssNext = require('postcss-cssnext');
const cssNano = require('cssnano');
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
    // The Angular Application tree.
    const appTree = _buildAppTree(defaults);

    let sass = MergeTree(_.map(glob.sync('src/!**!/!*.scss'), function (sassFile) {
        sassFile = sassFile.replace('src/', '');
        return compileSass(['src'], sassFile, sassFile.replace(/.scss$/, '.css'));
    }));

    let css = compileCSS(sass, options);
    return new MergeTree([appTree, css], {overwrite: true});
};


/!**
 * Build the Broccoli Tree containing all the files used as the input to the Angular2App.
 *!/
function _buildInputTree() {
    return new MergeTree([
        new Funnel('typings', {
            destDir: 'typings'
        }),
        new Funnel('src', {
            destDir: 'src'
        })
    ]);
}


/!**
 * Build the Broccoli Tree containing all the files used as the input to the e2e Angular2App.
 *!/
function _buildE2EAppInputTree() {
    return new MergeTree([
        new Funnel('typings', {
            destDir: 'typings'
        }),
        new Funnel('e2e', {
            destDir: 'e2e'
        })
    ]);
}


/!**
 * Build the Broccoli Tree that contains the Angular2 App. This picks between E2E,
 * app.
 * @param defaults The default objects from AngularCLI (deprecated).
 * @returns {Angular2App}
 *!/
function _buildAppTree(defaults) {
    let inputNode;
    let sourceDir;

    switch (process.env['MD_APP']) {
        case 'e2e':
            inputNode = _buildE2EAppInputTree();
            sourceDir = 'e2e';
            break;
        default:
            inputNode = _buildInputTree();
            sourceDir = 'src';
    }
    return new Angular2App(defaults, inputNode, {
        sourceDir: 'src',
        sassCompiler: {
            cacheExclude: [/\/_[^\/]+$/]
        },
        polyfills: [
            'vendor/core-js/client/core.js',
            'vendor/systemjs/dist/system.src.js',
            'vendor/zone.js/dist/zone.js',
            'vendor/hammerjs/hammer.min.js',
            '@angular2-material/core/core.js'
        ],
        tsCompiler: {},
        sassCompiler: {
            includePaths: [
                'src/assets'
            ]
        },
        vendorNpmFiles: [
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'zone.js/dist/!**!/!*.+(js|js.map)',
            'es6-shim/es6-shim.js',
            'reflect-metadata/!**!/!*.+(js|js.map)',
            'rxjs/!**!/!*.+(js|js.map)',
            '@angular/!**!/!*.+(js|js.map)',
            'hammerjs/!*.min.+(js|js.map)',
            '@ng2-material/!*.min.+(js|js.map|css)',
            '@angular2-material/!*.min.+(js|js.map)'
        ]
    });
}
*/
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
        polyfills: [
            'vendor/core-js/client/core.js',
            'vendor/systemjs/dist/system.src.js',
            'vendor/zone.js/dist/zone.js',
            'vendor/hammerjs/hammer.min.js'
        ],
        tsCompiler: {},
        vendorNpmFiles: [
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'zone.js/dist/**/*.+(js|js.map)',
            'core-js/client/core.js',
            'es6-shim/es6-shim.js',
            'reflect-metadata/**/*.+(js|js.map)',
            'rxjs/**/*.+(js|js.map)',
            '@angular/**/*.+(js|js.map|css)',
            '@angular2-material/**/*.+(js|js.map|css)',
            'ng2-material/**/*.+(js|js.map|css)',
            'hammerjs/*.min.+(js|js.map)'
        ]
    });

    let sass = mergeTrees(_.map(glob.sync('src/**/*.scss'), function (sassFile) {
        sassFile = sassFile.replace('src/', '');
        return compileSass(['src'], sassFile, sassFile.replace(/.scss$/, '.css'));
    }));

    let css = compileCSS(sass, options);

    return mergeTrees([appTree, sass, css], {overwrite: true});
};
