const core = require('@actions/core');
const simpleGit = require('simple-git');
let git = (function () {
    const git = simpleGit();
    let commit = async function (username, email, branch, message) {
        core.info( `Git Commit ${message}`)
        await git.addConfig('user.name', username)
        await git.addConfig('user.email', email)
        await git.add('./*')
        await git.commit(message)
    }
    let push = async function (branch) {
        core.info( `Git Push`)
        await git.push('origin', branch, {'--help': null});
    }
    return {
        commit: commit,
        push: push
    };
})();
module.exports = git;