/* @ts-expect-error - no typings for this*/
import prettier from "prettier/esm/standalone.mjs";
/* @ts-expect-error - no typings for this*/
import htmlParser from "prettier/esm/parser-html.mjs";
/* @ts-expect-error - no typings for this*/
import typescriptParser from "prettier/esm/parser-typescript.mjs";

import React from "react";

const getFormattedCode = ({ code, parser }) => {
  try {
    return prettier.format(code, {
      parser,
      plugins: [htmlParser, typescriptParser],
    });
  } catch (err) {
    console.warn(err);
    return code;
  }
};

export const Prettier: React.FC<{
  code: string;
  parser: "html" | "typescript";
}> = ({ code, parser }) => {
  return (
    <code>
      <pre>{getFormattedCode({ code, parser })}</pre>
    </code>
  );
};

export default Prettier;
