const fs = require('fs');
const path = require('path');

//__filename (full path of the current file)
//path.basename (return the filename of path)
const basename = path.basename(__filename);

const routes = {};

//__dirname (current directory)
//readdirSync (read all files in current directory)
fs
    .readdirSync(__dirname)
    .filter((file) =>
        (file.indexOf('.') !== 0) && //Exclude hidden files
        (file !== basename) && //Exclude itself (index.js)
        (file.slice(-3) === '.js'))
    .forEach((file) => {
        const this_module = path.parse(file).name;
        routes[this_module] = require(`./${this_module}`);
    });

module.exports = routes;
