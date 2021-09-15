import { customElement, html, LitElement } from "lit-element";

@customElement("bar-element")
export class Bar extends LitElement {
  render() {
    return html`<span><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bar-element": Bar;
  }
}
