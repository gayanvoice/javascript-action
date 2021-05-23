#!/usr/bin/env node
const index = require('./index');
const cli = async () => {
    console.log(`${process.argv[2]}`)
    return index.main();
};
cli().then(() => {});