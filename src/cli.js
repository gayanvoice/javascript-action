#!/usr/bin/env node
// const index = require('./index');
const cli = async () => {
    console.log(`input file ${process.argv[2]} output file ${process.argv[3]}`)
    // return index.main();
};
cli().then(() => {});