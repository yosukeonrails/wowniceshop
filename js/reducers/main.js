var actions = require('../actions/index');
import {handle} from 'redux-pack';


var stateDefault = {

   currentUser:{
     name:'yohyoh'
   }
   
};


export default function main(state,action){

  state = state || stateDefault;






   return {...state}

}
