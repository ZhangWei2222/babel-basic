import * as babelParser from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "babel-types";
import generate from "@babel/generator";
import template from "@babel/template";


const code = `import {A, B, C as D} from 'foo'`;


const ast = babelParser.parse(code, {
    sourceType: 'module'
});

const MODULE = 'foo'
traverse(ast, {
    ImportDeclaration(path) {
        if (path.node.source.value !== MODULE) {
            return
        }

        // 如果是空导入则直接删除掉
        const specs = path.node.specifiers
        if (specs.length === 0) {
            path.remove()
            return
        }

        // 判断是否包含了默认导入和命名空间导入
        if (specs.some(i => t.isImportDefaultSpecifier(i) || t.isImportNamespaceSpecifier(i))) {
            // 抛出错误，Babel会展示出错的代码帧
            throw path.buildCodeFrameError("不能使用默认导入或命名空间导入")
        }

        // 转换命名导入
        const imports = []
        for (const spec of specs) {
            const named = MODULE + '/' + spec.imported.name
            const local = spec.local
            console.log('--1--', t.importDeclaration([t.importDefaultSpecifier(local)], t.stringLiteral(named)))
            imports.push(t.importDeclaration([t.importDefaultSpecifier(local)], t.stringLiteral(named)))
            console.log('--2--', t.importDeclaration([], t.stringLiteral(`${named}/style.css`)))
            imports.push(t.importDeclaration([], t.stringLiteral(`${named}/style.css`)))
        }
        console.log('imports', imports)
        // 替换原有的导入语句
        path.replaceWithMultiple(imports)
    }
});

console.log('sdad', ast)

const result = generate(ast, {}, code);
console.log(result)
