#!/usr/bin/env node
const index = require('./index');
const cli = async () => {
    return index.main();
};
cli().then(() => {});