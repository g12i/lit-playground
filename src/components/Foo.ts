import { LitElement, html, customElement } from "lit-element";

@customElement("foo-element")
export class Foo extends LitElement {
  render() {
    return html`<span><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "foo-element": Foo;
  }
}
