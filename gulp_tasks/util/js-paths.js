import { dirs } from './paths'
import { rootify } from './rootify'


export let manifestApplicationJs = rootify([
  '**/*'
], `${dirs.src}/js/`, 'js');