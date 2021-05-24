const core = require('@actions/core');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const file = require('./file/file');
let Index = function () {
    let main = async function (commandModel) {
        const chartJSNodeCanvas = new ChartJSNodeCanvas({ width: 600, height: 400 });
        const configType = commandModel.type;
        const configLabels = JSON.parse(commandModel.labels);
        const configDataset = JSON.parse(commandModel.dataset);
        const configOutputFile= commandModel.outputFile;
        core.info(configType + ' ' + configLabels + ' ' + configDataset + ' ' + configOutputFile)
        core.info(JSON.stringify(configDataset));
        let datasets = [];
        for(const dataset of configDataset){
            datasets.push({label: dataset.label,  data: dataset.data, backgroundColor: dataset.backgroundColor, borderColor: dataset.borderColor});
            core.info(dataset.label + ' ' + dataset.data + ' ' + dataset.backgroundColor + ' ' + dataset.borderColor);
        }
        const configuration = {
            type: configType,
            data: {
                labels: configLabels,
                datasets: datasets
            }
        };
        const image = await chartJSNodeCanvas.renderToBuffer(configuration);
        await file.createImage(configOutputFile, image);
    }
    return {
        main: main,
    };
}();
module.exports = Index;