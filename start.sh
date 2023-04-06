#!/bin/bash
#
# 脚本名称：install_node.sh
# 脚本功能：更新apt、下载git和nvm，并使用nvm下载和选择Node.js版本19.0.0
# 作者姓名：你的名字
# 创建时间：年-月-日 时:分:秒
# 修改时间：年-月-日 时:分:秒
#

# 更新apt
sudo apt update

# 安装git
sudo apt install git -y

# 下载nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 使nvm生效
source ~/.bashrc

# 安装Node.js版本19.0.0
nvm install 19.0.0

# 使用Node.js版本19.0.0
nvm use 19.0.0

# 输出Node.js版本号
node -v

git clone https://github.com/cradle0fFilth/Blog-finished.git

cd Blog-finished

cd api && npm install
cd ../client && npm install
