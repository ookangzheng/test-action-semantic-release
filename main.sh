#! /bin/bash

REPO_NAME=$1
BRANCH_NAME=$2
USER_NAME=$3
USER_EMAIL=$4
TRIGGER_RELEASE=$5

TEAM=""

if [[ $USER_NAME == "ookangzheng" ]]; then
  TEAM="sygna"
fi

if [[ $TEAM == "sygna" ]] && [[ $BRANCH_NAME == "dev" ]]; then
  npx standard-version --prerelease alpha --dry-run
fi

if [[ $TEAM == "sygna" ]] && [[ $BRANCH_NAME == "main" ]]; then
  npx standard-version --dry-run
fi
