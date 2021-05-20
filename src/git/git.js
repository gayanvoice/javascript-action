const core = require('@actions/core');
const simpleGit = require('simple-git');
let git = (function () {
    const git = simpleGit();
    let status = async function () {
        await git.status().then(status => {
            core.info(`Git Status ${status}`)
        }).catch(error => {
            core.info(`Git Status ${error}`)
        })
    }
    let pull = async function () {
        core.info( `Git Pull`)
        git.pull();
        await status();

    }
    let commit = async function (username, email, branch, message) {
        core.info( `Git Commit ${message}`)
        await git.addConfig('user.name', username)
        await git.addConfig('user.email', email)
        await status();
        await git.add('./*')
        await status();
        await git.commit(message)
        await status();
    }
    let push = async function (branch) {
        core.info( `Git Push`)
        await git.push('origin', branch);
        await status();
    }
    return {
        pull: pull,
        commit: commit,
        push: push
    };
})();
module.exports = git;