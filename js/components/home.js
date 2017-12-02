

require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
import {push} from 'react-router-redux'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux';
import TopTenItemContainer from './toptenitem'
//import LogInWindowContainer  from './log-in-window.js'

var showSignIn= function(){

        $('.field-container').css('display' , 'block');
        $('.field-container').animate({opacity:'1'});

};


export class Home extends React.Component{

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
            <div className="home">

              <div className="home-nav">
                <ul>
                    <li>FASHION</li>
                      <li>TRAVEL</li>
                        <li>INTERIOR DESIGN</li>
                          <li>TECH</li>
                            <li>BOOKS</li>
                               <li>HEALTH</li>
                </ul>
              </div>



                <div className="site-content">

                    <div className="blog-post" style={{ backgroundImage:"url(https://source.unsplash.com/Lh2qwkppkf8/1600x900)"}}>

                      <div className="top-10-header">


                            <div className="top10-header-image"  style={{ backgroundImage:"url(https://source.unsplash.com/Lh2qwkppkf8/1600x900)"}} >
                                <h1>TRAVELING MUST HAVES FOR 2018!</h1>
                            </div>
                                <p>When it comes to traveling,
                                  the last thing you want is to be unprepared and have to hurry out the door
                                  hoping and praying that you did not forget something utterly important.
                                  This is why, we can up with this top 10 items that will make your traveling experience easy and most importantly,    fun! So lets begin!</p>

                                <div className="header-bottom-buttons">
                                        <div className="header-button likes"><button>42 LIKES</button>  </div>
                                          <div className="header-button comments"><button>COMMENTS</button> </div>
                                            <div className="header-button share"> <button>SHARE</button>  </div>
                                </div>


                      </div>


                                        <div className="top10-item-container">

                                                          <div className="item-n">
                                                          <h2>#10</h2><h1>SLEEPING BAG LINER</h1>
                                                          <div className="item-n-image" style={{backgroundImage:"url(https://images-na.ssl-images-amazon.com/images/I/61g5zfsf18L._SL1000_.jpg)"}}>
                                                          </div>

                                                          <p>
                                                          Pack , Go , Unpack , Sleep , Pack , Home! <br></br>Thats how easy your trips are gonna sound like when you buy the IFeng Travel and Camping Sleeping Bag! No more baggy, hard to fold sleeping bags that takes a lot of space and makes you at best clastrophobic at night! With this sleeping bag your rest is assure before , during and after the trip!
                                                          </p>

                                                          <div className="item-price">
                                                              <h1>PRICE:</h1>  <span id="price-number">$18.99</span>
                                                          </div>


                                                          <button> <a href="https://www.amazon.com/Sleeping-iFeng-Lightweight-Backpacking-Carrying/dp/B077L4SS3W/ref=sr_1_1?ie=UTF8&qid=1512185617&sr=8-1&keywords=sleeping+bag+liner+ifeng">BUY</a> </button>

                                                          </div>





                                                          <div className="item-n">
                                                              <h2>#9</h2><h1>JJ POWER TRAVEL PACKING CUBES</h1>
                                                          <div className="item-n-image" style={{backgroundImage:"url(https://images-na.ssl-images-amazon.com/images/I/81Cnwe5wrBL._UX691_.jpg)"}}>
                                                          </div>

                                                          <p>
                                                              It does not take long in a family vacation for all your stuff to be all over your place in your suitcase right? Well, problem solved with this amazing collection of travel pack cubes that will make your travels a much more organized and stress-free time.
                                                          </p>

                                                          <div className="item-price">
                                                              <h1>PRICE:</h1>  <span id="price-number">$18.69</span>
                                                          </div>


                                                          <button> <a href="https://www.amazon.com/JJ-POWER-Packing-Luggage-Organizers/dp/B074N12T6C">BUY</a> </button>

                                                          </div>








                                                          <div className="item-n">
                                                          <h1>8. REUSABLE, TO-GO WRAP</h1>
                                                          <div className="item-n-image" style={{backgroundImage:"url(https://images-na.ssl-images-amazon.com/images/I/71aFj0o0fpL._SY500_.jpg)"}}>
                                                          </div>

                                                          <p>
                                                              Cannot finish your over the top amazing camp food ? No problem! You do not need to bring bunch of To-Go boxes or unescessarily use plastic bags in order to store left-overs. With this amazing innovating To-Go wrap, you can now say "good-bye" to food-wasting!
                                                          </p>

                                                          <div className="item-price">
                                                              <h1>PRICE:</h1>  <span id="price-number"> $24.00 </span>
                                                          </div>


                                                          <button> <a href="https://www.amazon.com/Beeswax-Eco-Wrap-Replaces-Infinitely-Reusable/dp/B075KNJ8JW/ref=sr_1_1?ie=UTF8&qid=1512193670&sr=8-1&keywords=ecowrap">BUY</a> </button>

                                                          </div>



                                                          <div className="item-n">
                                                          <h1>8. REUSABLE, TO-GO WRAP</h1>
                                                          <div className="item-n-image" style={{backgroundImage:"url()"}}>
                                                          </div>

                                                          <p>

                                                          </p>

                                                          <div className="item-price">
                                                              <h1>PRICE:</h1>  <span id="price-number">  </span>
                                                          </div>


                                                          <button> <a href="">BUY</a> </button>

                                                          </div>


                                                        <TopTenItemContainer/>



                                  </div>

                    </div>

                </div>


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

   var HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
