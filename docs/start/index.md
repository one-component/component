---
nav:
  title: 快速上手
---

# 快速上手

## 安装

```bash
npm install --save @one-component/component
```

```bash
yarn add @one-component/component
```

## 引入组件

> 自动 tree shark

```tsx | pure
import { xxx } from '@one-component/component';
```

## 定制主题

在 `less-loader` 中配置 `modifyVars`。

请在 webpack 配置文件中添加

```js
{
  loader: 'less-loader', options: {
    modifyVars: {
      brand: 'green'
    } // 你可以把定制主题的部分提取到一个独立的文件
  }
}
```
