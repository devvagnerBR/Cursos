import { inline } from './inline.js'
inline() // não é possível atribuir outro nome, a não ser usando o 'as';


import defaultInline from './inline.js'
defaultInline() // pode ser atribuido outro nome a função; mas, só pode ter 1 export default por arquivo;

import { group } from './non-inline.js'
group()

import exportDefault from './non-inline.js'
exportDefault()