import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import Post from "./Post";
import RichText from "./RichText";

export const schema = {
  name: "default",
  types: schemaTypes.concat([
    Post,
    RichText
  ]),
};

export default createSchema(schema);
