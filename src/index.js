const core = require('@actions/core');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const directory = require('./file/directory');
const file = require('./file/file');
const git = require('./git/git');
const JsonFile = require('./model/JsonFile');
let Index = function () {
    let main = async function (commandModel) {
        const chartJSNodeCanvas = new ChartJSNodeCanvas({ width: 600, height: 400 });
        // const DIRECTORY = 'directory';
        // const FILE = 'file';
        // // const JSON_PATH = `${DIRECTORY}/${FILE}.json`;
        // const IMAGE_PATH = `${DIRECTORY}/${FILE}.png`;
        // const JSON_OBJECT = new JsonFile(new Date());
        // const USERNAME = 'Upptime Bot';
        // const EMAIL = '73812536+upptime-bot@users.noreply.github.com';
        // const BRANCH = 'main';
        // const MESSAGE = 'Update App';
        core.info(commandModel.config + ' ' + commandModel.image)
        // const configuration = {
        //     type: 'bar',
        //     data: {
        //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(255,99,132,1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     }
        // };
        // const image = await chartJSNodeCanvas.renderToBuffer(configuration);
        // await git.pull();
        // await directory.createDirectory(DIRECTORY);
        // await directory.createGitIgnore(DIRECTORY);
        // let readJson = await file.readJson(JSON_PATH);
        // core.info(JSON.stringify(readJson));
        // await file.createJson(JSON_PATH, JSON_OBJECT);
        // await file.createImage(IMAGE_PATH, image);
        // let postJson = await file.readJson(JSON_PATH);
        // core.info(JSON.stringify(postJson));
        // await git.commit(USERNAME, EMAIL, BRANCH, MESSAGE);
        // await git.push(BRANCH);
    }
    return {
        main: main,
    };
}();
module.exports = Index;