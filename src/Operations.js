import React, {Component} from 'react';
import LoveAPI from './LoveAPIs.js';
import FlirtyAPI from './FlirtyAPIs.js';
import OtherAPI from './OtherAPIs.js';
import { render } from '@testing-library/react';



class Operations extends React.Component { 
     state = {showingOps: false, showingLove: false, showingOther: false };

       toggleOps = () => {
          this.setState(prevState => ({
            displayOps: !prevState.displayOps
          }));

       }                               
     
     render(){
       const { showingOps, showingLove, showingFlirty, showingOther  } = this.state;
       return (

        <div className="opsContainer" >  
          <div className="opsParent" id="opsParent" onClick ={() => this.setState({ showingOps: !showingOps })} >
             <h1 style={{ color:'red', textAlign:'left'}}> Developers Guide </h1>
          </div>

          <div >
              <div style={{ display: (showingOps ? 'block' : 'none' ) }} >
              <div className="LoveHeader" onClick ={() => this.setState({ showingLove: !showingLove })} >
              <h2 style={{ color:'white'}}> The Love API </h2>
          </div>

          <div >
              <div style={{ display: (showingLove ? 'block' : 'none' ) }} >
                <a> love content goes here can be toggled </a>
              </div>    
          </div>

          <div className="FlirtyHeader" onClick ={() => this.setState({ showingFlirty: !showingFlirty })} >
             <h2 style={{ color:'white'}}> Flirty API </h2>
          </div>

          <div >
              <div style={{ display: (showingFlirty ? 'block' : 'none' ) }} >
                <a> Flirty Content goes here can be toggled.  </a>
              </div>
          </div>

          <div className="OtherHeader" onClick ={() => this.setState({ showingOther: !showingOther })} >
             <h2 style={{ color:'white'}}> Inspirational API </h2>
          </div>

          <div >
              <div style={{ display: (showingOther ? 'block' : 'none' ) }} >
                <a> Inspirational Content goes here can be toggled.  </a>
              </div>
          </div>

              </div>
          </div>
          
       </div>
     )
 };

}

export default Operations;