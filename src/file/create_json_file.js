const fs = require('fs-extra')
const core = require('@actions/core');

async function create_json_file(directory, file_name, json_object) {
    fs.mkdirp(directory);
    try {
        await fs.outputJson(file_name, json_object)
        core.info('Create Json - ' + file_name);
    } catch (err) {
        core.info('Error ${err} - ' + file_name);
    }
}

module.exports = create_json_file;