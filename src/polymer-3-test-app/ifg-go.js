import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {IFGAction} from './ifg-action.js'

/**
 * Go action
 * An event is thrown when the user selects this action.
 */
class IFGGo extends IFGAction {
  static get properties() {
    return {
      /**
       * Where we are going to.
       */
      to: {
        type: String
      },
      executedText: {
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
    this.dispatchEvent(new CustomEvent(this._EVENT_NAME, {bubbles: true, detail: {name:"Go", target: this.to, executedText: this.executedText}}));
  }
}

customElements.define('ifg-go', IFGGo);
