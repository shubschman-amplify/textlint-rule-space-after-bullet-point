'use strict';

module.exports = function(context, options = {}) {
    const { Syntax, RuleError, report, getSource } = context;
    return {
        [Syntax.List](node){ // list node
            const text = getSource(node); // Get text
            const bullets = (text.match(/\*/g) || []).length;
            if (bullets <= 1) { // single or no bullet
                return;
            } else {
                const points = node.raw.split('\n\n*');
                if (bullets === points.length) {
                    return;
                }
                const ruleError = new RuleError('List Error: You are missing a line break after a bullet point');
                report(node, ruleError);
            }
        }
    }
};
