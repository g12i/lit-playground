import { createComponent } from "../createComponent";
import * as React from "react";
import { Foo as FooElement } from "../components/Foo";

export const Foo = createComponent(React, "foo-element", FooElement, {});
