# 代码生成器
## AST(抽象语法树)
### 工具
* [AST 浏览器](https://astexplorer.net/)

### 文章
* [AST 与前端工程化实战](http://www.imooc.com/article/290884)
* [Babel 插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)
* [透過製作 Babel-plugin 初訪 AST](https://blog.arvinh.info/2018/08/25/visit-ast-with-babel-plugin/)

### npm 包
* [recast](https://github.com/benjamn/recast) 解析AST(parse)，遍历AST，修改AST，生成代码(print(...).code, prettyPrint)。文档很简单。
* [@babel/parser](https://babeljs.io/docs/en/next/babel-parser.html) 解析AST。 以前叫 [Babylon](https://github.com/babel/babylon)
* [@babel/traverse](https://babeljs.io/docs/en/next/babel-traverse.html) 遍历 AST,替换，移除和添加节点。
* [@babel/types](https://babeljs.io/docs/en/next/babel-types.html) 用于 AST 节点的 Lodash 式工具库， 它包含了构造、验证以及变换 AST 节点的方法。 该工具库包含考虑周到的工具方法，对编写处理AST逻辑非常有用。
* [@babel/generator](https://babeljs.io/docs/en/next/babel-generator.html) 是 Babel 的代码生成器，它读取AST并将其转换为代码和源码映射（sourcemaps）。
* [@babel/template](https://babeljs.io/docs/en/next/babel-template.html) 它能让你编写字符串形式且带有占位符的代码来代替手动编码， 尤其是生成的大规模 AST的时候。 在计算机科学中，这种能力被称为准引用（quasiquotes）。
