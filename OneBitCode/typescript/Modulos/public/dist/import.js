import * as lodash from 'lodash';
let OVNI = {
    name: 'X-wing',
    pilot: 'Luke Skywalker',
    speed: 50,
    weapons: 4
};
console.log(lodash.camelCase(OVNI.pilot));
