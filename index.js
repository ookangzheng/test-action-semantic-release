const core = require('@actions/core');
const github = require('@actions/github');
// const sh = require('shelljs');
const { exec } = require('child_process');

// token: ${{ secrets.GITHUB_TOKEN }}
const GITHUB_TOKEN = core.getInput('token')
const branch_name = core.getInput('branch_name')
const repo_name = core.getInput('repo_name')
const user_name = core.getInput('user_name')
const user_email = core.getInput('user_email')
const trigger_release = core.getInput('trigger_release')

try {
  exec('chmod +x ./main.sh')

  exec(`./main.sh ${repo_name.toString()} ${branch_name.toString()} ${user_name.toString()} ${user_email.toString()} ${trigger_release.toString()} ${GITHUB_TOKEN.toString()}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout:\n${stdout}`);
  });

} catch (error) {
  core.setFailed(error.message)
}

