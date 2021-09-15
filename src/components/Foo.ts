import * as React from "react";
import { LitElement, html, customElement } from "lit-element";
import { createComponent } from "@lit-labs/react";

@customElement("foo-element")
export class FooElement extends LitElement {
  render() {
    return html`<span><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "foo-element": FooElement;
  }
}

const Foo = createComponent(React, "foo-element", FooElement, {});

export { Foo };
