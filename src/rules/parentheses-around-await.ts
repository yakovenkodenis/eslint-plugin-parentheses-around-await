import { Rule } from 'eslint';
import { Node } from 'estree';

const rule: Rule.RuleModule = {
  create: context => {
    return {
      'AwaitExpression > MemberExpression > Identifier': (node: Node) => {
        if (node.type) {
          context.report({
            message: `If you want to access properties on an awaited value,
                      you should wrap the value with parentheses. If not, 
                      you may get undefined which will lead to bugs.
                      `,
            node,
          });
        }
      },
    };
  },
};

export = rule;
