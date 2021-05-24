#!/usr/bin/env node
const args = require('yargs').argv;
const index = require('./index');
const CommandModel = require('./model/CommandModel');
const cli = async () => {
    const commandModel = new CommandModel(args.config, args.image)
    return index.main(commandModel);
};
cli().then(() => {});