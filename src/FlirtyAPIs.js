import React, { Component } from 'react';
import ReactDOM from "react-dom"; 



class FlirtyAPI extends Component {
    get show() {
        return this.props.activeSection === "FlirtyAPI";
    }
   
    
  
    render() {
      if (this.show) {
          return <div className="FlirtyAPI"> 
                    <ul > 
                        <li> 
                            <div>
                              <h4> Motivational API </h4>
                              <span> <a> Get Off Your Ass </a></span>
                            </div>
                        </li>
                        <li>
                           <ul>
                              <li>
                                  <div> 
                                      <h4>endpoint for all quotes </h4>
                                  </div>
                                   <div> <span> <a>endpoint for all quotes </a></span> </div>
                                   <div> <button>Get </button>  </div>
                                  <div >
                                      <h4> Content: </h4>
                                  </div>
                              </li>
                              <li>

                                   <div> <span> <a>endpoint for Daily quotes </a></span> </div>
                                   <div> <button>Get </button>  </div>

                              </li>
                              <li>

                                   <div> <span> <a>endpoint for adding quotes </a></span> </div>
                                   <div> <button>Get </button>  </div>

                              </li>
                           </ul>
                        </li>
                  </ul>
                </div>;
      } else {
          return <div className="hide"> </div>;
      }
  }
}


export default FlirtyAPI;