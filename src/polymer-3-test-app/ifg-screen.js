import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

/**
 * Screen
 */
class IFGScreen extends PolymerElement {
  static get template() {
    return html`
    <style>
     .screen {
      display: flex;
      justify-content: center;
      max-height: 100%; 
      min-height: 100%;
      background-color: Black;
     }
     .central {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      max-width: 40em;
      max-height: 100%; 
      min-height: 100%;
      background-color: MidnightBlue;
     }
     #historyDiv {
      flex-basis: auto;
      flex-shrink: 1;
      background-color: DarkSlateBlue;
      z-index: 1; /* To stay over "historized" storyDiv */
     }
     #storyDiv {
      flex-basis: auto;
      flex-grow: 1;
      flex-shrink: 1;
      overflow: auto; 
      background-color: MidnightBlue;
     }
     @media only screen and (min-width: 961px) {
      #storyDiv::-webkit-scrollbar {
        width: 1em;
      }
      #storyDiv::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      }
      #storyDiv::-webkit-scrollbar-thumb {
        background-color: dimgrey;
        outline: 1px solid slategrey;
      }
     }
     #actionsDiv {
      flex-basis: auto;
      flex-shrink: 1;
      background-color: DarkSlateBlue;
      padding-top: 0.5em;
     }
     .historized {
      background-color: DarkSlateBlue !important;
      transform: translateY(-100vh);
      z-index: 0; /* To stay under historyDiv */
      transition-property: background-color transform;
      transition-duration: 1000ms;
      transition-timing-function: ease-in;
     }
    </style>

    <div class="screen">
      <div class="central">
        <div id="historyDiv">
          <slot name="history">
          </slot>
        </div>
        <div id="storyDiv">
          <slot name="story">
          </slot>
        </div>
        <div id="actionsDiv">
          <slot name="actions">
          </slot>
        </div>
      </div>
    </div>
    `;
  };
  ready() {
    super.ready();
    this.addEventListener('ifg-action-register', this._handleActionRegister);
    this.addEventListener('ifg-select-item', this._handleSelectItem);
    this.addEventListener('ifg-action-toggle', this._handleActionToggle);
  };
  constructor() {
    super();
    this.actions = {};
  };
  /**
   * Register an action
   * @param {Event} event 
   */
  _handleActionRegister(event) {
    this.actions[event.detail.name] = event.target;
  };
  /**
   * An item is selected
   * @param {Event} event 
   */
  _handleSelectItem(event) {
    if (!this.actions[event.detail.name].$.collapse.opened) {
      this.actions[event.detail.name].open();
      this._handleActionToggle(undefined);
    }
  };
  /**
   * An action node is toggled
   * @param {Event} event 
   */
  _handleActionToggle(event) {
    let storyDiv = this.shadowRoot.querySelector('#storyDiv');
    // Store current scroll values.
    let scrollTop0 = storyDiv.scrollTop;
    let clientHeight0 = storyDiv.clientHeight;
    // Start update scroll.
    let updateScroll = setInterval(function () {
      storyDiv.scrollTop = scrollTop0 + clientHeight0 - storyDiv.clientHeight;
    }, 5);
    // Stop update scroll.
    setTimeout(function(){
      clearInterval(updateScroll);    
    }, 300);
  };

  _getFirstSlottedElement(slotName, tagName) {
    let slot = this.shadowRoot.querySelector(`slot[name="${slotName}"]`);
    let elements = slot.assignedElements();
    let found = elements.find(function(element){
      return element.tagName.toLowerCase() === tagName;
    });
    return found;
  };

  logActionExecuted(action) {
    let ifgCurrentLocation = this._getFirstSlottedElement('story','ifg-current-location');

    ifgCurrentLocation.innerHTML += `
      <ifg-action-executed>
    ` + action.executedText;
 
    let storyDiv = this.shadowRoot.querySelector('#storyDiv')
    // Store current scroll values.
    let scrollTop0 = storyDiv.scrollTop;
    let scrollTop1 = storyDiv.scrollHeight - storyDiv.clientHeight;
    let deltaScroll = scrollTop1 - scrollTop0;
    let startTime = Date.now();
 
    // Start update scroll.
    let updateScroll = setInterval(function () {
      let deltaTime = Date.now()-startTime;
      storyDiv.scrollTop = scrollTop0 + deltaScroll*deltaTime/300;
    }, 5);
    // Stop update scroll.
    setTimeout(function(){
      clearInterval(updateScroll);    
      storyDiv.scrollTop = scrollTop1;
    }, 300);
  };

  historize(action) {
    let ifgCurrentLocation = this._getFirstSlottedElement('story','ifg-current-location');
    ifgCurrentLocation.innerHTML += `
      <ifg-action-executed>
    ` + action.executedText;

    let ifgHistory = this._getFirstSlottedElement('history','ifg-history');
    ifgHistory.innerHTML += `
      <ifg-location>`
      + ifgCurrentLocation.innerHTML;
  
    let storyDiv = this.shadowRoot.querySelector('#storyDiv');
    storyDiv.classList.add("historized");
    setTimeout(function(){
      ifgCurrentLocation.innerHTML="";
      storyDiv.classList.remove("historized");
    }, 1000);
  };

  changeLocation(placeName, places) {
    let place = places[placeName];
  
    let ifgCurrentLocation = document.querySelector("ifg-current-location");
    ifgCurrentLocation.innerHTML = `<ifg-description>` + place.description;
  
    let ifgActions = document.querySelector("ifg-actions");
    ifgActions.innerHTML = "";
    for (let item in place.actions) {
      ifgActions.innerHTML += `
        <ifg-actions name="${item}" display="${place.actions[item].text}">
          ${subAction(place, item)}
        `;
    }
  
    function subAction(place, item) {
      let result = "";
      for (let action in place.actions[item]) {
        switch (action) {
          case 'Go':
            result += `
              <ifg-go to="${item}" executed-text="${place.actions[item][action].executedText}">
                ${place.actions[item][action].text}
              `;
            break;
        }
      }
      return result;
    };
  };
  
}

customElements.define('ifg-screen', IFGScreen);
