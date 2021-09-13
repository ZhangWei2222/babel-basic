import * as babelParser from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "babel-types";
import generate from "@babel/generator";
import template from "@babel/template";

// const buildRequire = template(`
//   var IMPORT_NAME = require(SOURCE);
// `);
const name = "my-module";
const mod = "myModule";

const ast = template.ast`
  var ${mod} = require("${name}");
`;

// const ast = buildRequire({
//   IMPORT_NAME: t.identifier("myModule"),
//   SOURCE: t.stringLiteral("my-module"),
// });

console.log(generate(ast).code);

// const ast1 = template.ast(`
//   var myModule = require("my-module");
// `);
// console.log(ast1, ast);

// const code = `function square(n) {
//   return n * n;
// }`;


// const ast = babelParser.parse(code);


// // traverse(ast, {
// //   enter(path) {
// //     if (path.isIdentifier({ name: "n" })) {
// //       path.node.name = "x";
// //     }
// //   }
// // });

// traverse(ast, {
//   enter(path) {
//     if (t.isIdentifier(path.node, { name: "n" })) {
//       path.node.name = "x";
//     }
//   }
// });

// const result = generate(ast, {}, code);
// console.log(result)

// // const code1 = `import { Ajax } from '../lib/utils';
// // import utils from '../lib/utils';
// // import * as utils1 from '../lib/utils';`

// // const ast1 = babelParser.parse(code1, { sourceType: "module" });
// // traverse(ast1, {
// //   ImportDeclaration(path, state) {
// //     const specifiers = path.node.specifiers;
// //     console.log('==', specifiers)

// //     specifiers.forEach((specifier) => {
// //       if (!t.isImportDefaultSpecifier(specifier) && !t.isImportNamespaceSpecifier(specifier)) {
// //         console.log('do something')
// //       }
// //     })
// //   }
// // });



