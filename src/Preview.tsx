import React from "react";
import r2jsx from "react-element-to-jsx-string";
import { renderToString as r2html } from "react-dom/server";

const Prettier = React.lazy(() => import("./Prettier"));

export const Preview: React.FC = ({ children }) => {
  return (
    <div>
      <h2>Preview</h2>

      <div>{children}</div>

      <h2>React code</h2>

      <React.Suspense fallback={<span>Loading...</span>}>
        <Prettier parser="typescript" code={r2jsx(<>{children}</>)} />
      </React.Suspense>

      <h2>HTML code</h2>

      <React.Suspense fallback={<span>Loading...</span>}>
        <Prettier parser="html" code={r2html(<>{children}</>)} />
      </React.Suspense>
    </div>
  );
};

export default Preview;
