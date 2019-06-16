import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';


/**
 * Description
 */
class IFGDescription extends PolymerElement {
  static get template() {
    return html`
    <style>
    .description {
      text-align: justify;
      color: White;
      margin: 1em;
      text-indent: 1em;
    }
    .description::first-letter {
      font-size: 130%;
    }
    ::slotted(p) {
      text-indent: 0;
      margin-top: 0.5em;
      margin-bottom: 0;
    }
    </style>

    <div class="description">
      <slot></slot>
    </div>
    `;
  };
  constructor() {
    super();
  };
}

customElements.define('ifg-description', IFGDescription);
