import { RuleTester } from 'eslint';

import rule from './parentheses-around-await';

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2017 } });

tester.run('parentheses-around-await', rule, {
  valid: [
    {
      code: `
    (async () => {
        const method = async () => ({ property: 'prop' });
        const a = (await method()).property;
    })();
`,
    },
  ],
  invalid: [
    {
      code: `
      (async () => {
        const method = async () => ({ property: 'prop' });
        const a = await method().property;
      })();
      `,
      errors: [
        {
          message: `If you want to access properties on an awaited value,
                      you should wrap the value with parentheses. If not, 
                      you may get undefined which will lead to bugs.
                      `,
        },
      ],
    },
  ],
});
