'use strict';
const TextLintTester = require('textlint-tester');
const tester = new TextLintTester();
const rule = require('../src/index');

tester.run('space-after-bullet-point', rule, {
    valid: [
        `* the first bullet point\n\n* the second bullet point`,
        `* the first bullet point\n\n* the second bullet point\n\n* the third bullet point`
    ],
    invalid: [
        // single invalidation
        {
            text: `* the first bullet point\n* the second bullet point`,
            errors: [
                {
                    message: 'List Error: You are missing a line break after a bullet point',
                    line: 1
                }
            ]
        }
    ]
});
