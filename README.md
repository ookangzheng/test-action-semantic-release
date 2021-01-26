# Semantic Release Action

**This Action is deprecated** It was a nice learning experience, but there are more complete actions in the marketplace.

[![GitHub Action](https://img.shields.io/badge/GitHub-Action-blue?style=for-the-badge)](https://github.com/features/actions)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![GitHub Actions](https://github.com/brpaz/action-semantic-release/workflows/CI/badge.svg?style=for-the-badge)](https://github.com/brpaz/action-semantic-release/actions)


## What is included

cli tool with the following plugins pre-installed:

* @semantic-release/npm

## Usage

On your GitHub Actions workflow file, add the following step:

* install_plugins: Specify a list of [Semantic Release Plugins](https://semantic-release.gitbook.io/semantic-release/extending/plugins-list) to install. Note that some plugins might depend on libraries that are not present in this action.
* branch: Specify the branch to release from. Defaults to "master"

```yml
steps:
    uses: ookangzheng/test-action-semantic-release@v1
    with:
        token: ${{ secret.GITHUB_TOKEN }}
        branch_name: "dev"
        repo_name: "semantic-release-docker"
        user_name: ookangzheng
        user_email: xxx@xxx.com
        trigger_release: "false"

```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please look at [CONTRIBUTING](CONTRIBUTING.md) for details how to get started.

## Author

👤 **Oo Kang Zheng**

* Website: [https://edoo.dev](https://edoo.dev)
* Github: [@ookangzheng](https://github.com/ookangzheng)

## 📝 License

This project is [MIT](LICENSE) licensed.
