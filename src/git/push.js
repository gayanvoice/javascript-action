const { exec } = require('child_process');
const core = require('@actions/core');

let push = function () {
    return new Promise(() => {
        core.info('git push');
        exec('git push');
    });
};

module.exports = push;