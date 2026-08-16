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

## 开发

- `lib/client.js` — 插件全部实现（`window.__ModuleLoader__.load` 静态 bundle 格式）
- `lib/index.js` — 最小 host 半区（纯客户端插件，无 host 逻辑）
- `cordis.patch.yml` — bundle 注册（插入 web 插件名册）
- 设置持久化在浏览器 `localStorage`（键 `dsh.appearance.v1`）

## License

MIT
