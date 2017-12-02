var React = require('react');
import {connect} from 'react-redux';

import {push} from 'react-router-redux'
import {hashHistory} from 'react-router'



export class App extends React.Component{

          constructor(props){
          super(props);

          }

        render () {

              return(
                        <div className="app">

                            <div className="top-nav">
                                <h1> <span className="wow">wow!</span>nice<span className="shop">shop!</span></h1>
                            </div>


                                    {this.props.children}


                              <div className="footer">
                                    <h1> <span className="wow">wow!</span>nice<span className="shop">shop!</span></h1>

                                  <h2>MENU</h2>
                                <ul>
                                    <li>FASHION</li>
                                      <li>TRAVEL</li>
                                        <li>INTERIOR DESIGN</li>
                                          <li>TECH</li>
                                            <li>BOOKS</li>
                                               <li>HEALTH</li>
                                </ul>



                              </div>


                        </div>
              );
        }
}


var mapStateToProps= function(state){
  console.log(state)

return {
   currentUser: state.main.currentUser
}
}

var AppContainer= connect(mapStateToProps)(App)

module.exports = AppContainer;
