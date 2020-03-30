/*
* 加路由，加页面的源码文件
*/
const fs = require('fs-extra')
const babelParser = require('@babel/parser')
const parse = babelParser.parse
const traverse = require('@babel/traverse').default
const t = require('@babel/types')
const generate = require('@babel/generator').default
const routerFilePath = '../www/src/setting/base/router.js'

// add('/demo/list', 'demo/List') // ok

function add(routerPath, filePath) {
  fs.readFile(routerFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    const routerCode = data
    let ast = parse(routerCode, {
      'sourceType': 'module'
    })
    traverse(ast, {
      Identifier(path) {
        if(path.node.name === 'routes') { // 标识符
          let parent = path.container//.value.elements // 路由数组
          if(t.isVariableDeclarator(parent)) {
            parent.init.elements.push(
             t.objectExpression(
                [
                  t.objectProperty(
                    t.identifier('path'), 
                    t.stringLiteral(routerPath)
                  ),
                  t.objectProperty(
                    t.identifier('filePath'), 
                    t.stringLiteral(filePath)
                  ),
                ]
              )
            )
          }
          return // 停止遍历
        }
      }
    })

    let output = generate(ast, {}, routerCode).code
    fs.writeFile(routerFilePath, output)
    // console.log(output)
  })
}
