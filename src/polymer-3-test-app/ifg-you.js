import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';


/**
 * What you says.
 */
class IFGYou extends PolymerElement {
  static get template() {
    return html`
    <style>
      .line {
        display: flex;
        margin-top: 0.1em;
      }
      .person {
        display: flex;
        align-items: center;
        text-align: left;
        font-style: italic;
        color: Grey;
        margin-left: 0.5em;
      }
      .sentence {
        text-align: justify;
        background-color: DarkOrange;
        border-radius: 1em;
        padding: 0.5em;
        margin-right: 0.5em;
      }
    </style>

    <div class="line">
      <div class="person">You:</div>
      <div class="sentence"><slot></slot></div>
    </div>
    `;
  };
  constructor() {
    super();
  };
}

customElements.define('ifg-you', IFGYou);
