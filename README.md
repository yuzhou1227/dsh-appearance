# dsh-appearance

DSH Web GUI 外观设置插件（设置 → 外观）：颜色模式与主题（跟随系统/浅色/深色）、42 个内置配色主题（Aura…Vitesse + 默认/纸张/北欧蓝/深夜蓝/纯黑/暮紫）、自定义主题 JSON 导出/导入/粘贴、界面/代码字体、字号与密度、窗口控件、本地化（语言/时间格式/周起始日）、应用安装（PWA 名称/屏幕方向/移动端键盘模式）、移动端布局。

纯客户端插件，无构建步骤，直接以已构建产物发布。

## 安装

```sh
dsh plugin --profile desktop add github:yuzhou1227/dsh-appearance
```

安装后重启 `dsh`（或等待热挂载）即可生效。

## 卸载

```sh
dsh plugin --profile desktop remove @yuzhou1227/dsh-appearance
```

## 开发 / 迭代

对已安装用户：修改后 `git push`，然后 `dsh plugin --profile desktop update @yuzhou1227/dsh-appearance`，重启 DSH 生效。

- `lib/client.js` — 插件全部界面逻辑（`window.__ModuleLoader__.load` 静态 bundle 格式；**load 的 id 必须等于完整包名**）
- `lib/index.js` — host 半区：`ctx.settings` 命名空间持久化设置（桌面端 renderer 的 localStorage 不持久，设置必须走 host）+ `/api/dsh-appearance/get|set` 同源路由
- `cordis.patch.yml` — bundle 注册（插入 web 插件名册）
- 设置链路：改设置 → localStorage（缓存）+ POST host；启动 → DOM 就绪后 GET host 回灌（带重试，host 路由可能晚于 bundle 注册）
- 设置持久化在宿主设置文档（`~/.dsh/settings.yaml` 的 `appearance.data`）

## License

MIT
