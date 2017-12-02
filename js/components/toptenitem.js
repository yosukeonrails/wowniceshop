
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;

import {push} from 'react-router-redux'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux';

export class TopTenItem extends React.Component{

  constructor(props){
    super(props)
    this.showSignIn= this.showSignIn.bind(this);
  }

    showSignIn(){
        console.log(showSignIn)
      showSignIn();

    }
    render () {


      return(

        <div>

          <div className="item-n">
          <h2>#10</h2><h1>SLEEPING BAG LINER</h1>


          <div>

            <div className="item-n-image" style={{backgroundImage:"url(https://images-na.ssl-images-amazon.com/images/I/61g5zfsf18L._SL1000_.jpg)"}}>
            </div>

            <div className="top-item-description">
              <p>
              Pack , Go , Unpack , Sleep , Pack , Home! <br></br>Thats how easy your trips are gonna sound like when you buy the IFeng Travel and Camping Sleeping Bag! No more baggy, hard to fold sleeping bags that takes a lot of space and makes you at best clastrophobic at night! With this sleeping bag your rest is assure before , during and after the trip!
              </p>

            </div>



          </div>






          <div className="item-price">
              <h1>PRICE:</h1>  <span id="price-number">$18.99</span>
          </div>


          <button> <a href="https://www.amazon.com/Sleeping-iFeng-Lightweight-Backpacking-Carrying/dp/B077L4SS3W/ref=sr_1_1?ie=UTF8&qid=1512185617&sr=8-1&keywords=sleeping+bag+liner+ifeng">BUY</a> </button>

          </div>



        </div>

    );
  }
}


  var mapStateToProps= function(state){

        return {
            loggedUser:state.loggedUser
        }
  }

   var TopTenItemContainer = connect(mapStateToProps)(TopTenItem);

export default TopTenItemContainer;
