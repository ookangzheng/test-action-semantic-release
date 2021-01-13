const core = require('@actions/core');
const github = require('@actions/github');
const sh = require('shelljs');

if (!sh.which('git')) {
  sh.echo('Sorry, this script requires git');
  sh.exit(1);
}
// token: ${{ secrets.GITHUB_TOKEN }}
const GITHUB_TOKEN = core.getInput('token')
const branch_name = core.getInput('branch_name')
const repo_name = core.getInput('repo_name')
const user_name = core.getInput('user_name')
const user_email = core.getInput('user_email')
const trigger_release = core.getInput('trigger_release')

try {
  sh.chmod('+x', 'main.sh')
  sh.exec(`./main.sh ${repo_name.toString()} ${branch_name.toString()} ${user_name.toString()} ${user_email.toString()} ${trigger_release.toString()}`)
} catch (error) {
  core.setFailed(error.message)
}

