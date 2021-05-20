const { exec } = require('child_process');
const core = require('@actions/core');

async function create_directory(directory){
    core.info('create directory - ' + directory);
    exec('mkdir ' + directory);
    exec('cd ' + directory);
    exec('touch ' + directory + '/.gitkeep');
}
module.exports = create_directory;