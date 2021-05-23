#!/usr/bin/env node
const index = require('./index');
const cli = async () => {
    await index.main();
};
cli().then(() => {});