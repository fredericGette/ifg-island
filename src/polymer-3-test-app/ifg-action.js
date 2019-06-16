import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

/**
 * Abstract Action
 * An event "ifg-action-execute" is thrown when the user selects this action.
 */
export class IFGAction extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        text-decoration: underline;
        color: Aqua;
        text-shadow: -1px 0 1px black, 0 1px 1px black, 1px 0 1px black, 0 -1px 1px black;
        margin-left: 1em;
      }
    </style>

    <slot on-click="_handleClick"></slot>
    `;
  };
  static get properties() {
    return {
      /**
       * The name of the action.
       */
      name: {
        type: String
      },
      executedText: {
        type: String
      }
    };
  };
  constructor() {
    super();
    this._EVENT_NAME = "ifg-action-execute";
  };
  /**
   * User selects this action.
   * @param {Event} event 
   */
  _handleClick(event) {
    this.dispatchEvent(new CustomEvent(this._EVENT_NAME, {bubbles: true, detail: {name: this.name, executedText: this.executedText}}));
  }
}
