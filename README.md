## Space After Bullet Point
    This rule will notify you if you did not add a space after a bullet point (*) in a markdown or other file.

    passes:
    ```
        * The first bullet point

        * They second bullet point

        nextline
    ```

    doesn't pass:
    ```
        * The first bullet point

        * They second bullet point
        nextline
    ```

    ```
        * The first bullet point
        * They second bullet point

        nextline
    ```
    

## About
 Created with [create-textlint-tool](https://github.com/textlint/create-textlint-rule) as a plugin rule for textlint

## Install

Install with [npm](https://www.npmjs.com/):

    npm install space-after-bullet-point

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "space-after-bullet-point": true
    }
}
```

Via CLI

```
textlint --rule space-after-bullet-point README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester").

    npm test
 
