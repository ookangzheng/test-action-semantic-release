const core = require('@actions/core');
// const github = require('@actions/github');
// const sh = require('shelljs');
var child = require('child_process');

// token: ${{ secrets.GITHUB_TOKEN }}
const GITHUB_TOKEN = core.getInput('token')
const branch_name = core.getInput('branch_name')
const repo_name = core.getInput('repo_name')
const user_name = core.getInput('user_name')
const user_email = core.getInput('user_email')
const trigger_release = core.getInput('trigger_release')

try {
  const chmod = child.spawn('chmod', ['+x', './main.sh'])
  chmod.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  const exec = child.spawn(
    `./main.sh ${repo_name.toString()} ${branch_name.toString()} ${user_name.toString()} ${user_email.toString()} ${trigger_release.toString()} ${GITHUB_TOKEN.toString()}`
  )

  exec.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  exec.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

} catch (error) {
  core.setFailed(error.message)
}

