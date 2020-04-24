import React, { Component } from 'react';




class FlirtyAPI extends Component {
    state = { showingFlirty: false }
  
    render() {
         const { showingFlirty } = this.state;

          return ( 
               <div className="FlirtyAPI"  onClick ={() => this.setState({ showingFlirty: !showingFlirty })} > 
                    <ul style={{ display: (showingFlirty ? 'block' : 'none' ) }}> 
                        <li> 
                            <div >
                              <h4> Flirty API </h4>
                              <span> <a> A collection to help those who are "Flirty Impaired" </a></span>
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
                </div>
      
   )}
 }


export default FlirtyAPI;