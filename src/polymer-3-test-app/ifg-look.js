import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {IFGAction} from './ifg-action.js'

/**
 * Look action
 * An event is thrown when the user selects this action.
 */
class IFGLook extends IFGAction {
  static get properties() {
    return {
      /**
       * What we are looking at.
       */
      at: {
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
    this.dispatchEvent(new CustomEvent(this._EVENT_NAME, {bubbles: true, detail: {name:"Look", target: this.at}}));
  }
}

customElements.define('ifg-look', IFGLook);
