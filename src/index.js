const core = require('@actions/core');
const create_json_file = require('./file/create_json_file');
const create_directory = require('./file/create_directory');
const read_json_file = require('./file/read_json_file');
const commit = require('./git/commit');
const push = require('./git/push');

async function run() {
  try {
    const record_directory = 'directory';
    const json_file = record_directory + '/file.json';
    await create_directory(record_directory);

    let json_object;
    try{
      let file = await read_json_file(json_file);
      json_object = JSON.parse(JSON.stringify(file));
      core.info(json_object.date)
    } catch (e) {
      core.info(e)
    }

    await create_json_file(record_directory, json_file, {  date: new Date() });
    await commit();
    await push();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
    .then(() => core.info('running'))
    .catch(() => core.info('not running'));