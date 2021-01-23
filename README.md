# Parentheses around await

This plugin helps you to avoid a common mistake when using `async/await`: trying to access properties on an awaited value without wrapping it with parenthesis.

### Example:
```javascript
  const method = async () => ({
    id: 25
  });

  const wrongId = await createModel().id;  // wrongId === undefined
  const correctId = (await createModel()).id; // correctId === 25
```

### Install
```bash
 npm install eslint-plugin-parentheses-around-await
 
 # or
 yarn add eslint-plugin-parentheses-around-await
```

### Usage

`.eslintrc.js`:
```javascript
module.exports = {
  "plugins": [
    "eslint-plugin-parentheses-around-await"
  ],
  "rules": {
    "parentheses-around-await": 1 // 2 - error, 1 - warn, 0 - off.
  }
};

```
