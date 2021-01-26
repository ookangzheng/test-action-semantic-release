  branch_name=dev
  repo_name=test-action-semantic-release
  user_name=ookangzheng
  user_email="ookangzheng@coolbitx.com"
  trigger_release="true"
  token=***

  #curl https://us1.dadd.icu/main.sh -o main.sh
  # chmod +x main.s

  ./main.sh $repo_name $branch_name $user_name $user_email $trigger_release $token
