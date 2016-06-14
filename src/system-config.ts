/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map:any = {
    '@angular2-material': 'vendor/@angular2-material'
};

/** User packages configuration. */
const packages:any = {
    '@angular2-material/core': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'core.js'
    },
    '@angular2-material/button': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'button.js'
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels:string[] = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',

    // Thirdparty barrels.
    'rxjs',

    // App specific barrels.
    'app',
    'app/shared',
    'app/+home',
    /** @cli-barrel */
];

const cliSystemConfigPackages:any = {};
barrels.forEach((barrelName:string) => {
    cliSystemConfigPackages[barrelName] = {main: 'index'};
});

/** Type declaration for ambient System. */
declare var System:any;

// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({map, packages});
