import _ from 'lodash';

let fileList = require.context('./assets/icons', true, /[\s\S]*$/);

let dictionary = {};
fileList.keys().forEach(x => {
    x = x.replace('./', '');
    dictionary[_.camelCase(x.replace('.svg', ''))] = require(`./assets/icons/${x}`);
});

export default dictionary;
