// import plugins
import {watch, parallel, series, gulp} from 'gulp';
import {sources} from './gulp_tasks/util/paths';
// tasks list
import {buildClean} from './gulp_tasks/clean';
import {buildCss} from './gulp_tasks/css';
import {buildImages} from './gulp_tasks/images';
import {buildPug} from './gulp_tasks/html';
import {buildFonts, fontsInjection} from './gulp_tasks/fonts';
import {buildSprite} from './gulp_tasks/sprite';
import {buildJS, buildApplicationJs} from './gulp_tasks/javascript';
import {connectServer, browserSync} from './gulp_tasks/connect';


export const devWatch = () => {
    global.watch = true;
    watch(sources.styles, series(buildCss));
    watch(sources.sprite, series(buildSprite));
    watch(sources.templates, series(buildPug)).on('all', (event, filepath) => {
        global.emittyChangedFile = filepath;
   });
    watch(sources.scripts, series(buildApplicationJs));
};

// tasks build
export const dev = series(
    buildClean,
    buildImages,
    buildCss,
    buildPug,
    buildFonts,
    buildSprite,
    buildJS,
    parallel(devWatch, connectServer, browserSync)
);

export const build = series(
    buildClean,
    buildImages,
    buildCss,
    buildPug,
    buildFonts,
    buildSprite,
    buildJS,
    fontsInjection
);

export default dev;