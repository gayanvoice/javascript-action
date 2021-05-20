const core = require('@actions/core');
const simpleGit = require('simple-git');
let git = (function () {
    const git = simpleGit();
    let pull = async function () {
        core.info( `Git Pull`)
        try {
            await git.pull();
        } catch (error) {
            core.info(error);
        }
    }
    let commit = async function (username, email, branch, message) {
        core.info( `Git Commit ${message}`)
        try {
            await git.addConfig('user.name', username)
            await git.addConfig('user.email', email)
            await git.add('./*')
            await git.commit(message)
        } catch (error) {
            core.info(error);
        }
    }
    let push = async function (branch) {
        core.info( `Git Push`)
        try {
            await git.push('origin', branch);
        } catch (error) {
            core.info(error);
        }
    }
    return {
        pull: pull,
        commit: commit,
        push: push
    };
})();
module.exports = git;