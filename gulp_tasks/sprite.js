import {src, dest, gulp} from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import bs from 'browser-sync';

import { dirs } from './util/paths';

const config = {
  mode: {
    symbol: { // symbol mode to build the SVG
      render: {
        css: false, // CSS output option for icon sizing
        scss: false // SCSS output option for icon sizing
      },
      dest: './', // destination folder
      sprite: 'sprite.pug',
    }
  }
};

export const buildSprite = () => {
  return src(dirs.src + '/images/ico/*.svg')
    .pipe(svgSprite(config))
    .pipe(dest(dirs.src + '/templates'))
    .pipe(bs.stream());
};