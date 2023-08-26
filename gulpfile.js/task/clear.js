const del = require("del");

// Configuration
const path = require("../config/path.js");

// Deleting dir
const clear = () => {
    return del(path.root);
}

module.exports = clear; 
