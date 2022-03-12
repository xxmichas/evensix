// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import test from "./test";
import landingPage from "./documents/landingPage";
import hero from "./objects/hero";
import button from "./objects/button";
import heroItem from "./objects/heroItem";
import navLink from "./objects/navLink";
import card from "./objects/card";
import contentSectionCards from "./objects/contentSectionCards";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    card,
    contentSectionCards,
    test,
    landingPage,
    navLink,
    hero,
    heroItem,
    button,
  ]),
});
