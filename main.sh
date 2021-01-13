#! /bin/sh

export REPO_NAME = $1
export BRANCH_NAME = $2
export USER_NAME = $3
export USER_EMAIL = $4
export TRIGGER_RELEASE = $5

TEAM=""

if [[ "$USER_NAME" == "ookangzheng" ]]; then
  TEAM="sygna"
fi

if [[ $TEAM == "sygna" ]] && [[ $BRANCH_NAME == "dev" ]]; then
  npx standard-version --prerelease alpha
fi

if [[ $TEAM == "sygna" ]] && [[ $BRANCH_NAME == "main" ]]; then
  npx standard-version
fi
