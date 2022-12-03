/**
 * @fileoverview Enable file description rule
 * @author Abdul Rehman
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Enable file description rule",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    messages: {
      'description-not-found': 'A comment with "@fileoverview" must be provided with a description of min length 20.',
    },
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      Program(node) {
        const firstComment = (node.comments[0] || {}).value || '';
        const regexToMatch = /(@fileoverview)\s([a-zA-Z0-9\s]{33})+/g; // +13 for @fileoverview
        const hasDescription = regexToMatch.test(firstComment);
        if (!hasDescription) {
          return context.report({
            node,
            messageId: 'description-not-found',
          });
        }
        return hasDescription;
      },
  };
  },
};
