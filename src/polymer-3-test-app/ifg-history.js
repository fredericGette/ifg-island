import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import '@polymer/iron-collapse/iron-collapse.js';

/**
 */
class IFGHistory extends PolymerElement {
  static get template() {
    return html`
    <style>
      .collapse-content {
        padding-bottom: 0.5em;
        max-height: 50vh;
        overflow: auto; 
      }
      @media only screen and (min-width: 961px) {
        .collapse-content::-webkit-scrollbar {
          width: 1em;
        }
        .collapse-content::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        }
        .collapse-content::-webkit-scrollbar-thumb {
          background-color: dimgrey;
          outline: 1px solid slategrey;
        }
       }  
      ::slotted(*) {
        display: block;
      }
      .action-click {
        color: Aqua;
        text-shadow: -1px 0 1px black, 0 1px 1px black, 1px 0 1px black, 0 -1px 1px black;
        margin-left: 1em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
      }
    </style>

    <div class="action-click" on-click="_handleClick">History</div>

    <iron-collapse id="collapse">
      <div class="collapse-content">
          <slot></slot>
      </div>
    </iron-collapse>
    `;
  };

  constructor() {
    super();
  };

  _handleClick(event) {
    this.$.collapse.toggle();
    if (this.$.collapse.opened) {
      let storyDiv = this.shadowRoot.querySelector('.collapse-content')
      storyDiv.scrollTop = storyDiv.scrollHeight - storyDiv.clientHeight;
    }
  };

}

customElements.define('ifg-history', IFGHistory);
