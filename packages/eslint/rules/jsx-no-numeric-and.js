const { ESLintUtils } = require('@typescript-eslint/utils');
const tsutils = require('tsutils');
const ts = require('typescript');

const createRule = ESLintUtils.RuleCreator(name => `https://typescript-eslint.io/rules/${name}`);

function findLogicalExpressionLeft(leftNode) {
  if (leftNode.type === 'LogicalExpression' && leftNode.left) {
    return findLogicalExpressionLeft(leftNode.left);
  }
  return leftNode;
}

module.exports = createRule({
  name: 'jsx-no-numeric-and',
  // @ts-ignore
  meta: {
    type: 'problem',
    docs: {
      description: 'React JSX 中不允许 number 数字类型直接和 &&（逻辑和） 使用',
      recommended: 'error',
    },
    fixable: 'code',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      JSXExpressionContainer(node) {
        const parserServices = ESLintUtils.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
        if (
          node.expression &&
          node.expression.type === 'LogicalExpression' &&
          node.expression.operator === '&&' &&
          node.expression.left
        ) {
          const identifier = findLogicalExpressionLeft(node.expression.left);
          if (!identifier) {
            return;
          }
          const nodeType = checker.getTypeAtLocation(
            parserServices.esTreeNodeToTSNodeMap.get(identifier),
          );
          if (tsutils.isTypeFlagSet(nodeType, ts.TypeFlags.NumberLike)) {
            context.report({
              node,
              // @ts-ignore
              message: 'React JSX 中不允许 number 数字类型直接和 && 使用，建议转成 !!number &&',
            });
          }
        }
      },
    };
  },
});
