

# mxcad 文档自动部署


第一步和第二步只在跟换工作环境或者第一次发布时操作，否则直接跳过这两个步骤

## 第一步 生成ssh



```bash
# "xxx@xxx.com" 改为自己的邮件(不是必须的)
ssh-keygen -t ed25519 -C "xxx@xxx.com"

# 按三下Enter 建

# 得到如下提示：
# Enter same passphrase again:
# Your identification has been saved in /c/Users/MxDev/.ssh/id_ed25519
# Your public key has been saved in /c/Users/MxDev/.ssh/id_ed25519.pub

# 打开公钥 复制
cat C:/Users/MxDev/.ssh/id_ed25519

# 打开私钥 复制
cat C:/Users/MxDev/.ssh/id_ed25519.pub
```

## 第二步

在[gitee-个人设置-SHH公钥](https://gitee.com/profile/sshkeys)以及[github-settings-sshKeys](https://github.com/settings/keys)中添加公钥

在github[settings-SSH keys-new SHH key](https://github.com/settings/ssh/new)中添加公钥

在github对应仓库[mxcad_docs-settings-secrets-actions](https://github.com/mxcad/mxcad_docs/settings/secrets/actions)中修改`GITEE_PRIVATE_KEY`字段 设置成私钥

## 第三步

返回到mxcad 根目录下运行如下命令:

```bash
yarn pub
```

完成上述步骤后, 文档自动发布到github 并同步gitee仓库, 并且自动部署 gitee page 服务

生成文档如下：

github: <https://mxcadx.gitee.io/mxcad_docs/>

gitee: <https://mxcadx.gitee.io/mxcad_docs/>

## 参考资料

> <https://gitee.com/yiXu0100/hub-mirror/tree/main>
> <https://gitee.com/heartaotime/gitee-pages-action>

