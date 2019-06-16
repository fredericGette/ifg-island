import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {IFGAction} from './ifg-action.js';

/**
 * Talk action
 * An event is thrown when the user selects this action.
 */
class IFGTalk extends IFGAction {
  static get properties() {
    return {
      /**
       * Who we are talking to.
       */
      to: {
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
    this.dispatchEvent(new CustomEvent(this._EVENT_NAME, {bubbles: true, detail: {name:"Talk", target: this.to}}));
  }
}

customElements.define('ifg-talk', IFGTalk);
