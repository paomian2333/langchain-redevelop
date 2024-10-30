# Kode
北理工2024-2025第一学期软件体系结构与设计模式课程项目-基于all-hands-ai的代码生成工具OpenHands的二次开发

# 项目简介
本项目是北理工2024-2025第一学期软件体系结构与设计模式课程项目-基于all-hands-ai的代码生成工具OpenHands的二次开发，旨在实现一个更高效、更灵活的代码生成工具，以支持更广泛的编程语言和框架。

# 项目目标
- 可以使用本地部署的LLM进行代码生成和问题问答
- 编辑代码更方便，将询问LLM与代码编辑器结合
- 支持更多的编程语言和框架
- 支持更多的代码生成任务，如单元测试生成、代码重构等
- 提高代码生成的准确性和效率，降低硬件需求

# 部署方法
- 环境需求
* Linux, Mac OS, or [WSL on Windows](https://learn.microsoft.com/en-us/windows/wsl/install)  [ Ubuntu <= 22.04]
* [Docker](https://docs.docker.com/engine/install/) (For those on MacOS, make sure to allow the default Docker socket to be used from advanced settings!)
* [Python](https://www.python.org/downloads/) = 3.11
* [NodeJS](https://nodejs.org/en/download/package-manager) >= 18.17.1
* [Poetry](https://python-poetry.org/docs/#installing-with-the-official-installer) >= 1.8
* netcat => sudo apt-get install netcat
- 本地部署方法
1. 克隆项目到本地
2. 安装依赖
3. 通过makefile启动服务
4. 访问http://localhost:3001/即可使用
- 更加具体的部署方案可参考[OpenHands官方文档](https://docs.all-hands.dev/modules/usage/installation)
