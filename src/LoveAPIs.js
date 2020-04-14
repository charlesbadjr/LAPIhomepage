import React, { Component } from 'react';
import ReactDOM from "react-dom"; 

class LoveAPI extends Component {
    get show() {
        return this.props.activeSection === "LoveAPI";
    }
   
    
  
    render() {
      if (this.show) {
          return <div className="LoveAPI"> 
                    <ul > 
                        <li> 
                            <div>
                              <h4> Love API </h4>
                              <span> <a> A Gathering Of Love! </a></span>
                            </div>
                        </li>
                        <li>
                            <div>
                               <h4>Flirty Quotes:</h4>
                               <span> <a> A Gathering Of Love! </a></span>
                            </div>
                        </li>
                  </ul>
                </div>;
      } else {
          return <div className="hide"> </div>;
      }
  }
}


export default LoveAPI;

