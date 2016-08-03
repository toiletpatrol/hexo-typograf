[Typograf](https://github.com/typograf/typograf) plugin for [Hexo](https://github.com/hexojs/hexo).

Plugin modifies displayed content, title, excerpt.

Typograf works great for Russian texts. There might be a better plugin for English texts like [hexo-typo](https://github.com/borisschapira/hexo-typo) that uses [tipograph](https://github.com/pnevyk/tipograph) or something like that.

## Usage

```bash
npm install --save hexo-typograf
```

Hexo automatically loads plugins with `hexo-` prefix from `node_modules` folder. Don't forget to set language in `_config.yml`.

## Configuration

Plugin uses `language` value from root `_config.yml` file.