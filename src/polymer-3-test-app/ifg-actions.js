import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-collapse/iron-collapse.js';

/**
 * Selector of actions.
 * Contains a list of ifg-action or ifg-actions (node of actions).
 * In addition to the root ifg-actions, only one other sub ifg-actions can be opened at a time.
 */
class IFGActions extends PolymerElement {
  static get template() {
    return html`
    <style>
      .collapse-content {
        margin-left: 1em;
        padding-bottom: 0.5em;
      }
      ::slotted(*) {
        display: block;
      }
      .action-click {
        color: Aqua;
        text-shadow: -1px 0 1px black, 0 1px 1px black, 1px 0 1px black, 0 -1px 1px black;
        margin-left: 1em;
        padding-bottom: 0.5em;
      }
    </style>

    <div class="action-click" on-click="_handleClick">[[_getDisplayName()]]</div>

    <iron-collapse id="collapse">
      <div class="collapse-content">
        <iron-selector>
          <slot></slot>
        </iron-selector>
      </div>
    </iron-collapse>
    `;
  };
  
  static get properties () {
    return {
      /**
       * Internal name of this node.
       */
      name: {
        type: String
      },
      /**
       * Display name of this node.
       */
      display: {
        type: String
      }
    };
  };

  ready() {
    super.ready();
    this.addEventListener('opened', this._handleChildOpened);
    this.addEventListener('closed', this._handleChildClosed);
    this.addEventListener('ifg-action-execute', this._handleChildExecute);
    this.dispatchEvent(new CustomEvent('ifg-action-register', {bubbles: true, detail: {name: this.name}}));
  };

  constructor() {
    super();
    this.childOpen = undefined;
  };

  /**
   * Open this node.
   */
  open() {
    this.dispatchEvent(new CustomEvent('opened', {bubbles: true}));
    this.$.collapse.opened = true;
  };

  /**
   * Close this node.
   */
  close() {
    this.dispatchEvent(new CustomEvent('closed', {bubbles: true}));
    this.$.collapse.opened = false;
  };

  /**
   * User clicks this node to open/close it.
   * @param {Event} event 
   */
  _handleClick(event) {
    this.dispatchEvent(new CustomEvent('ifg-action-toggle', {bubbles: true}));
    this.$.collapse.toggle();
    if (this.$.collapse.opened) {
      this.dispatchEvent(new CustomEvent('opened', {bubbles: true}));
    } else {
      this.dispatchEvent(new CustomEvent('closed', {bubbles: true}));
      if (this.childOpen !== undefined) {
        this.childOpen.close();
      }
    }
  };

  /**
   * A sub node has been opened.
   * @param {Event} event 
   */
  _handleChildOpened(event) {
    if (event.target !== this) {
      event.stopPropagation();
      if (this.childOpen !== undefined) {
        this.childOpen.close();
      }
      this.childOpen = event.target;

      if (!this.$.collapse.opened) {
        this.open();
      }
    }
  };

  /**
   * A sub node has been closed.
   * @param {Event} event 
   */
  _handleChildClosed(event) {
    if (event.target !== this) {
      this.childOpen = undefined;
      event.stopPropagation();
    }
  };

  /**
   * An action has been selected.
   * @param {Event} event 
   */
  _handleChildExecute(event) {
    this.close();
    if (this.childOpen !== undefined) {
      this.childOpen.close();
    }
  };

  /**
   * Displayed name of this actions node.
   */
  _getDisplayName() {
    let displayName = this.name;
    if (this.display !== undefined) {
      displayName = this.display;
    }
    return displayName;
  };
}

customElements.define('ifg-actions', IFGActions);
