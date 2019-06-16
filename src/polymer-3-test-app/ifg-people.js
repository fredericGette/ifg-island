import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';


/**
 * What other people says.
 */
class IFGPeople extends PolymerElement {
  static get template() {
    return html`
    <style>
      .line {
        display: flex;
        flex-direction: row-reverse;
        margin-top: 0.1em;
      }
      .person {
        display: flex;
        align-items: center;
        text-align: right;
        color: Grey;
        font-style: italic;
        margin-right: 0.5em;
      }
      .sentence {
        text-align: justify;
        background-color: SteelBlue;
        border-radius: 1em;
        padding: 0.5em;
        margin-left: 0.5em;
      }
    </style>

    <div class="line">
      <div class="person">:[[name]]</div>
      <div class="sentence"><slot></slot></div>
    </div>
    `;
  };
  static get properties () {
    return {
      /**
       * Name of this node (only for display purpose).
       */
      name: {
        type: String
      }
    };
  };
  constructor() {
    super();
  };
}

customElements.define('ifg-people', IFGPeople);
