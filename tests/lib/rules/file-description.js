/**
 * @fileoverview Enable file description rule
 * @author Abdul Rehman
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/file-description"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("file-description", rule, {
  valid: [
    // give me some code that won't trigger a warning

   {
    code: `/** 
       * @fileoverview aadasjd sadasnkd dasdnas sjadnask jkdas djsaj asjkdsa
      */
      // sadjasdkasd ladas
    `
   }
   
  ],

  invalid: [
    {
      code: "Description not provided",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
