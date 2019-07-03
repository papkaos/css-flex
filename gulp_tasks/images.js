//import plugins
import {src, dest, gulp} from 'gulp';

//import variables
import { dirs } from './util/paths';

export const buildImages = () => {

  return src(dirs.src + '/images/**/*.*')
    .pipe(dest(dirs.dest + '/images/'))

};