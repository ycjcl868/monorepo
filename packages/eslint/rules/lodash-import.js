// https://eslint.rustc.cloud/r/R0qUuKu
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  name: 'lodash-import',
  meta: {
    docs: {
      description: '不允许引入 lodash 模块，而是直接使用 lodash-es 模块',
      category: 'Possible',
      recommended: true,
    },
    schema: [],
    type: 'problem',
  },
  create: function (context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === 'lodash') {
          context.report({
            node,
            message: '请使用 lodash-es 模块代替 lodash 模块',
          });
        }
      },
    };
  },
};
