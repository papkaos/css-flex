//import plugins
import {src, dest, gulp} from 'gulp';
import postCss from 'gulp-postCss';
import {dirs} from './util/paths';


const bs = require('browser-sync').create();

const postCssVariables = require( './postCss/variables');
const postCssMedia = require( './postCss/media');
const postCssFunctions = require( './postCss/functions');
const postCssMixins = require( './postCss/mixins');
const postCssSupport = require( './postCss/support');

export const buildCss = () => {

    const plugins = [
      require('postcss-import')(),
      require('postcss-mixins')(),
      require('postcss-nested')(),
      require('postcss-custom-properties')({ variables: postCssVariables} ),
      require('postcss-custom-media')(postCssMedia),
      require('postcss-functions')(postCssFunctions),
      require('postcss-apply')({ sets: postCssMixins }),
      require('postcss-cssnext')(postCssSupport)
    ];

    return src(['node_modules/normalize.css/normalize.css', dirs.src + '/css/manifest.css'])
      .pipe(postCss(plugins, {}))
      .pipe(dest(dirs.dest + '/css/'))
      .pipe(bs.stream());

};