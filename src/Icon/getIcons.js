import _ from 'lodash';

/**
 * Require all icons first - export them as an object - key is the filename without .svg and in camelCase
 */

let fileList = require.context('./assets/icons', true, /[\s\S]*$/);

let dictionary = {};
fileList.keys().forEach(x => {
    x = x.replace('./', '');
    dictionary[_.camelCase(x.replace('.svg', ''))] = require(`./assets/icons/${x}`);
});

export default dictionary;
