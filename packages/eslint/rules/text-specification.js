const defaultOptions = [
  {
    checkItems: ['帐']
  }
]

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  name: 'text-specification',
  meta: {
    type: 'problem',
    docs: {
      description:
        '不允许使用"帐号"、"帐户"、"登陆"文案，建议改成"账号"、"账户"、"登录"',
      category: 'Best Practices',
      recommended: 'error'
    },
    schema: [
      {
        type: 'object',
        properties: {
          checkItems: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['帐']
            }
          }
        },
        additionalProperties: false
      }
    ]
  },
  defaultOptions,
  create: function (context) {
    const option =
      context.options && context.options[0]
        ? context.options[0]
        : defaultOptions[0]
    const { checkItems } = option || {}

    const commonHandler = (node, value) => {
      if (typeof value === 'string') {
        if (checkItems.includes('帐') && value.includes('帐号')) {
          context.report({
            node: node,
            message: '不允许使用 "帐号" 文案，建议改成 "账号"'
          })
        }
        if (checkItems.includes('帐') && value.includes('帐户')) {
          context.report({
            node: node,
            message: '不允许使用 "帐户" 文案，建议改成 "账户"'
          })
        }

        if (value.includes('登陆')) {
          context.report({
            node,
            message: '不允许使用 "登陆" 文案，建议改成 "登录"'
          })
        }
      }
    }

    return {
      Literal: (node) => commonHandler(node, node.value),
      TemplateElement: (node) => commonHandler(node, node.value.raw)
    }
  }
}
