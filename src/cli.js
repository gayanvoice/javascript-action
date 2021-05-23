#!/usr/bin/env node
const index = require('./index');
const cli = async () => {
    console.log(`out put ${process.argv[1]}`)
    return index.main();
};
cli().then(() => {});