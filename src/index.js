const core = require('@actions/core');
const directory = require('./file/directory');
const file = require('./file/file');
const git = require('./git/git');
const JsonFile = require('./model/JsonFile');
let Index = function () {
    let main = async function () {
        const DIRECTORY = 'directory';
        const FILE = 'file';
        const PATH = `${DIRECTORY}/${FILE}.json`;
        const JSON_OBJECT = new JsonFile(new Date());
        const USERNAME = 'Upptime Bot';
        const EMAIL = '73812536+upptime-bot@users.noreply.github.com';
        const BRANCH = 'main';
        const MESSAGE = 'Update App';
        await git.pull();
        await directory.createDirectory(DIRECTORY);
        await directory.createGitIgnore(DIRECTORY);
        let readJson = await file.readJson(PATH);
        core.info(JSON.stringify(readJson));
        await file.createJson(PATH, JSON_OBJECT);
        let postJson = await file.readJson(PATH);
        core.info(JSON.stringify(postJson));
        await git.commit(USERNAME, EMAIL, BRANCH, MESSAGE);
        await git.push(BRANCH);
    }
    return {
        run: main,
    };
}();
Index.run().then(() => {
});