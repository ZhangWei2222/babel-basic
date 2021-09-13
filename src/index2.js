import * as babelParser from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "babel-types";
import generate from "@babel/generator";
import template from "@babel/template";


const code = `foo === bar;`;


const ast = babelParser.parse(code);


traverse(ast, {
  BinaryExpression(path) {
    if (path.node.operator !== "===") {
      return;
    }

    path.node.left = t.identifier("sebmck");
    path.node.right = t.identifier("dork");
  }
});

console.log('--',)

const result = generate(ast, {}, code);
console.log(result)
