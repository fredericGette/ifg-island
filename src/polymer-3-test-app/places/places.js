import {dock} from './dock.js';
import {lookoutPoint} from './lookout-point.js';
import {scummBar} from './scumm-bar.js';
import {scummBarRearRoom} from './scumm-bar-rear-room';
import {scummBarKitchen} from './scumm-bar-kitchen';
import {scummBarKitchenOutside} from './scumm-bar-kitchen-outside';
import {village} from './village.js';


export let places = [];
places["Dock"]=dock;
places["LookoutPoint"]=lookoutPoint;
places["ScummBar"]=scummBar;
places["ScummBarRearRoom"]=scummBarRearRoom;
places["ScummBarKitchen"]=scummBarKitchen;
places["ScummBarKitchenOutside"]=scummBarKitchenOutside;
places["Village"]=village;