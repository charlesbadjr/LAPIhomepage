import React, { Component } from 'react';
import ReactDOM from "react-dom"; 



class OtherAPIs extends Component {
    get show() {
        return this.props.activeSection === "OtherAPI";
    }
   
    
  
    render() {
      if (this.show) {
          return <div className="OtherAPI"> 
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
          return null;
      }
  }
}


export default OtherAPIs;



