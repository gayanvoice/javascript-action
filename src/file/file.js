const fs = require('fs-extra')
const core = require('@actions/core');
const ReadFile = require('../model/ReadFile');
let file = (function () {
    let createJson = async function (fileName, jsonObject) {
        try {
            await fs.outputJson(fileName, jsonObject)
            core.info( `Json file has been updated at ${fileName}`)
        } catch (error) {
            core.info( `Json file has not been updated at ${fileName}`)
        }
    }
    let createImage = async function (fileName, image) {
        try {
            await fs.outputFile(fileName, image)
            core.info( `Image file has been updated at ${fileName}`)
        } catch (error) {
            core.info( `Image file has not been updated at ${fileName}`)
        }
    }
    let readJson = async function (fileName) {
        try {
            let file = await fs.readJson(fileName);
            return new ReadFile(true, file);
        } catch (error) {
            return new ReadFile(false, error);
        }
    }
    return {
        createJson: createJson,
        createImage: createImage,
        readJson: readJson
    };
})();
module.exports = file;