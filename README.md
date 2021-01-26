# Semantic Release Action - SYG-123
**This Action is deprecated** It was a nice learning experience, but there are more complete actions in the marketplace.

[![GitHub Action](https://img.shields.io/badge/GitHub-Action-blue?style=for-the-badge)](https://github.com/features/actions)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

## Usage

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

This project is [MIT](LICENSE) licensed
