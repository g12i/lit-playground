import { createComponent } from "@lit-labs/react";
import { customElement, html, LitElement } from "lit-element";
import * as React from "react";

@customElement("bar-element")
export class BarElement extends LitElement {
  render() {
    return html`<span><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bar-element": BarElement;
  }
}

const Bar = createComponent(React, "bar-element", BarElement, {});

export { Bar };
