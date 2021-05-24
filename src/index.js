const core = require('@actions/core');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const directory = require('./file/directory');
const file = require('./file/file');
const git = require('./git/git');
const JsonFile = require('./model/JsonFile');
let Index = function () {
    let main = async function (commandModel) {
        const chartJSNodeCanvas = new ChartJSNodeCanvas({ width: 600, height: 400 });
        const configType = commandModel.type;
        const configLabels = JSON.parse(commandModel.labels);
        const configPrimaryDataset = JSON.parse(commandModel.primaryDataset);
        const configSecondaryDataset = commandModel.secondaryDataset;
        const configOutputFile= commandModel.outputFile;

        const USERNAME = 'Upptime Bot';
        const EMAIL = '73812536+upptime-bot@users.noreply.github.com';
        const BRANCH = 'main';
        const MESSAGE = 'Update App';

        core.info(configType + ' ' + configLabels + ' ' + configPrimaryDataset + ' ' + configSecondaryDataset + ' ' + configOutputFile)
        core.info(JSON.stringify(configPrimaryDataset));
        // const configuration = {
        //     type: CONFIG_TYPE,
        //     data: {
        //         labels: CONFIG_LABELS,
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: '#89e0cf',
        //             borderColor: '#1abc9c'
        //         }]
        //     }
        // };
        // const image = await chartJSNodeCanvas.renderToBuffer(configuration);
        // await git.pull();
        // await file.createImage(OUTPUT_FILE, image);
        // await git.commit(USERNAME, EMAIL, BRANCH, MESSAGE);
        // await git.push(BRANCH);
    }
    return {
        main: main,
    };
}();
module.exports = Index;