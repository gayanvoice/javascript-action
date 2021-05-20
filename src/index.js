const core = require('@actions/core');
const directory = require('./file/directory');
const file = require('./file/file');
const git = require('./git/git');
const JsonFile = require('./model/JsonFile');
let Index = function () {
    let main = async function () {
        const DIRECTORY = 'cache';
        const FILE = 'apple';
        const PATH = `${DIRECTORY}/${FILE}.json`;
        const JSON_OBJECT = new JsonFile(new Date());
        const USERNAME = 'github-insights-bot';
        const EMAIL = '82011272+github-insights-bot@users.noreply.github.com';
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