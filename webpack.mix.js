const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/main.js', 'public/js')
    .sass('resources/sass/main.scss', 'public/css');

mix.copyDirectory('resources/images', 'public/images')
mix.copy('resources/css/custom.css', 'public/css')
mix.copy('resources/css/responsive.css', 'public/css')
