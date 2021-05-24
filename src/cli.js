#!/usr/bin/env node
// const index = require('./index');
const args = require('yargs').argv;
const cli = async () => {
    console.log(args);
    console.log(`config : ${args.config}`);
    console.log(`image : ${args.image}`);
    // return index.main();
};
cli().then(() => {});