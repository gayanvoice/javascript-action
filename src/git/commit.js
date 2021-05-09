const { exec } = require('child_process');
const core = require('@actions/core');

async function commit(){
    core.info('git commit');
    exec('git config --global user.email "email@yadex.com"');
    exec('git config --global user.name "GitHub Name"');
    exec('git add .');
    exec('git commit -m "message"');
}

module.exports = commit