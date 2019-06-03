<img src="https://raw.githubusercontent.com/antfu/vue-i18n-ally/master/static/logo.png" alt="logo" width="150" align="right"/>

# Vue i18n Ally

Better [Vue i18n](https://github.com/kazupon/vue-i18n) experiences with VSCode

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/antfu.vue-i18n-ally.svg?style=flat-square)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/antfu.vue-i18n-ally.svg?style=flat-square)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/antfu.vue-i18n-ally.svg?style=flat-square)

🚧 This project is under construction, please use wisely...

## ⚡ Features

- Inline annotation
- i18n key autocomplete
- Friendly UI for managing locales
- One-click machine translation
- Extract text from code

## ⚙ Installation

1. Install [`vue-i18n`](https://github.com/kazupon/vue-i18n) package if you haven't yet. `npm i vue-i18n` or `yarn add vue-i18n`
2. Install this extension
3. `locales` path should be detected automatically. You can also configure it manually. There are two ways to do that:
   - Open **Command Palette** (`Ctrl-Shift-P` or `⌘⇧P`), type `Vue i18n Ally: Manual configure locales path` then press enter and follow the guide.
   - Modify the `settings.json` file of your VSCode, adding `vue-i18n-ally.localesPath` manually.

## 📂 Supported locales directory structure

You can have locales directory structured like this

    .
    ├── ...
    ├── locales     # you can specify the folder path in the settings
    |   ├── en.json
    |   ├── de.json
    |   ├── zh-CN.json
    |   ├── zh-TW.json
    |   ├── ...
    |   └── <contry-code>.json
    |
    └── ...         # other files or your project

or

    .
    ├── ...
    ├── locales     # you can specify the folder path in the settings
    |   ├── en
    |   |   ├── common.json
    |   |   ├── buttons.json
    |   |   ├── ...
    |   |   └── <what_ever_you_want>.json
    |   ├── de
    |   |   ├── common.json
    |   |   ├── buttons.json
    |   |   └── ...
    |   └── <contry-code>
    |       ├── common.json
    |       ├── buttons.json
    |       └── ...
    |
    └── ...         # other files or your project


Currently we only support `json` as your locales file type. If you would like use different formats, please open an issue or pull request. Also if you would like to have different


## 🐞 Known issuses

- [ ] Workspace is not compatible with this plugin for now, please try to open the project alone if you are facing errors.

## 📅 TODO

- [ ] Vue inlined locales support
- [ ] Hide/Show specific locales
- [ ] Workspace support
- [ ] JSON file annonation & hint

## 👨‍💻 Credits

This extension is original forked from [think2011/vscode-vue-i18n](https://github.com/think2011/vscode-vue-i18n), it can't be existed without [@think2011](https://github.com/think2011)'s great work.

## License

[MIT License](https://github.com/antfu/vue-i18n-ally/blob/master/LICENSE) © 2019 [Anthony Fu](https://github.com/antfu)

MIT License © 2018-2019 [think2011](https://github.com/think2011)
