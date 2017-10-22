// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by okta.js.
import { name as packageName } from "meteor/avb:okta";

// Write your tests here!
// Here is an example.
Tinytest.add('okta - example', function (test) {
  test.equal(packageName, "okta");
});
