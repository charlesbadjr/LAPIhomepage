import React, {Component} from 'react';
import Methods from './Methods.js';
import { render } from '@testing-library/react';


// I can pass method info into the MethodsComponent to reuse it. 

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
             <h1 id="opsTitle" > Developers Guide: </h1>
          </div>

          <div style={{ display: (showingOps ? 'block' : 'none' ) }}>
              <div  >
                   <div className="apiHeader" onClick ={() => this.setState({ showingLove: !showingLove })} >
                   <h2 id="apiTitle" > Love Quotes API </h2>
              </div>

              <div >
                 <div style={{ display: (showingLove ? 'block' : 'none' ) }} >
                    <Methods   />
                 </div>    
              </div>

              <div className="apiHeader" onClick ={() => this.setState({ showingFlirty: !showingFlirty })} >
                   <h2 id="apiTitle" > Flirty Quotes API </h2>
              </div>

              <div >
                 <div style={{ display: (showingFlirty ? 'block' : 'none' ) }} >
                    <Methods   />
                 </div>
              </div>

              <div className="apiHeader" onClick ={() => this.setState({ showingOther: !showingOther })} >
                  <h2 id="apiTitle" > Inspirational Quotes API </h2>
              </div>

              <div >
                 <div style={{ display: (showingOther ? 'block' : 'none' ) }} >
                    <Methods  />
                 </div>
              </div>

            </div>
         </div>
          
       </div>
     )
 };

}

export default Operations;