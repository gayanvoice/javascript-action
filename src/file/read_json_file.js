const fs = require('fs-extra')
const core = require('@actions/core');

async function read_json_file(file) {
    core.info('Read file - ' + file);
    return await fs.readJson(file);
}

module.exports = read_json_file;