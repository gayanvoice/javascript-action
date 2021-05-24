const core = require('@actions/core');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const directory = require('./file/directory');
const file = require('./file/file');
const git = require('./git/git');
const JsonFile = require('./model/JsonFile');
let Index = function () {
    let main = async function (commandModel) {
        const chartJSNodeCanvas = new ChartJSNodeCanvas({ width: 600, height: 400 });
        const CONFIG_TYPE = commandModel.type;
        const CONFIG_LABELS = JSON.parse(commandModel.labels);
        const CONFIG_DATASET = JSON.parse(commandModel.dataset);
        const OUTPUT_FILE= commandModel.outputFile;
        const USERNAME = 'Upptime Bot';
        const EMAIL = '73812536+upptime-bot@users.noreply.github.com';
        const BRANCH = 'main';
        const MESSAGE = 'Update App';
        core.info(CONFIG_TYPE + ' ' + CONFIG_LABELS + ' ' + JSON.stringify(CONFIG_DATASET) + ' ' + OUTPUT_FILE)
        const configuration = {
            type: CONFIG_TYPE,
            data: {
                labels: CONFIG_LABELS,
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255,99,132,1)'
                }]
            }
        };
        const image = await chartJSNodeCanvas.renderToBuffer(configuration);
        await git.pull();
        await file.createImage(OUTPUT_FILE, image);
        await git.commit(USERNAME, EMAIL, BRANCH, MESSAGE);
        await git.push(BRANCH);
    }
    return {
        main: main,
    };
}();
module.exports = Index;