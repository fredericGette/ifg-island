import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import './ifg-screen.js'; // Imported first to listen to child's events.
import './ifg-actions.js';
import './ifg-talk.js';
import './ifg-go.js';
import './ifg-look.js';
import './ifg-people.js';
import './ifg-you.js';
import './ifg-select.js';
import './ifg-description.js';
import './ifg-history.js';
import { places } from './places/places.js';

window.addEventListener('ifg-action-execute', handleActionExecute);

function handleActionExecute(event) {
  console.log("main ", event.detail);
  let action = event.detail;

  let ifgScreen = document.querySelector("ifg-screen");

  //ifgScreen.logActionExecuted(action);

  switch (action.name) {
    case 'Go':
      ifgScreen.historize(action);
      setTimeout(function(){
        ifgScreen.changeLocation(action.target, places);
      },1000);
      break;
  }
};



