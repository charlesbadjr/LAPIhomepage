import React, {Component} from 'react';
import LoveAPI from './LoveAPIs.js';
import { render } from '@testing-library/react';



class Operations extends React.Component { 
     state = {showingOps: false  };

       toggleOps = () => {
          this.setState(prevState => ({
            displayOps: !prevState.displayOps
          }));

       }                               
     
     render(){
       const { showingOps  } = this.state;
       return (
        <div >  
          <div className="opsParent" id="opsParent" onClick ={() => this.setState({ showingOps: !showingOps })} >
             <h2 style={{ color:'white'}}> Opperations </h2>
          </div>

          <div >
              <ul style={{ display: (showingOps ? 'block' : 'none' ) }} >
         
                      <li > 
                          <div> <LoveAPI /> </div> 
                      </li>
                      <li > Flirty API 
                           <div>  </div>
                      </li>
                      <li > other API 
                         <div>  </div>
                      </li>
               </ul>
          </div>
       </div>
     )
 };

}

export default Operations;