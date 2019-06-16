import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

/**
 * Select an item.
 * An event "ifg-select-item" is thrown when the user clicks .
 */
export class IFGSelect extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        font-style: italic;
        font-weight: bold;
        color: Yellow;
      }
    </style>

    <slot on-click="_handleClick"></slot>
    `;
  };
  static get properties() {
    return {
      /**
       * The name of the item.
       */
      name: {
        type: String
      }
    };
  };
  constructor() {
    super();
  };
  /**
   * User selects this action.
   * @param {Event} event 
   */
  _handleClick(event) {
    this.dispatchEvent(new CustomEvent("ifg-select-item", {bubbles: true, detail: {name: this.name}}));
  };
}

customElements.define('ifg-select', IFGSelect);
