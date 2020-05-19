import React, {Component} from 'react';
import MethodComp from './MethodComp.js';
import Methods from './Methods.js';

// I can pass method info into the MethodsComponent to reuse it. 

class Operations extends Component { 
     state = {showingOps: false, showingLove: false, showingOther: false,
               isLoading: false, quote:'', 

               method:[{  methodTitle:'Get Quote By Quote ID', 
                         url:'https://us-central1-loveapi.cloudfunctions.net/app/lovequotes',
                         method:'read', number:'6'},
                        { methodTitle:'Get All Quotes', 
                         url:'https://us-central1-loveapi.cloudfunctions.net/app/lovequotes',
                         method:'read', number:''},
                         {  methodTitle:'Get The Quote Of The Day', 
                         url:'https://us-central1-loveapi.cloudfunctions.net/app/lovequotes',
                         method:'read', number:'2'}
                   ] 
               };

 
       componentDidMount () {
         this.setState({ isLoading: true });
         fetch('https://us-central1-loveapi.cloudfunctions.net/app/lovequotes/read/3')
         .then(response => response.json() )
         .then(quote => this.setState({ quote: quote, isLoading:false }));
        }

       
     
   render(){
       const { showingOps, showingLove, showingFlirty, showingOther  } = this.state;
       return (
      
        <div className="opsContainer" >  

          <div className="opsParent" id="opsParent" onClick ={() => this.setState({ showingOps: !showingOps })} >
             <h1 id="opsTitle" > Developers Guide: </h1>
          </div>

          <div >
              <div style={{ display: (showingOps ? 'block' : 'none' ) }} >
                   <div className="apiHeader"  onClick ={() => this.setState({ showingLove: !showingLove })}>
                     <h2 id="apiTitle" > Love API  </h2>
                  </div>

              <div style={{ display: (showingLove ? 'block' : 'none' ) }} >
                 <Methods {...this.state.method} />
              </div>

              <div className="apiHeader" onClick ={() => this.setState({ showingFlirty: !showingFlirty })} >
                   <h2 id="apiTitle" > Flirty Quotes API </h2>
              </div>

              <div >
                 <div style={{ display: (showingFlirty ? 'block' : 'none' ) }} >
                      <Methods {...this.state.method} />
                 </div>
              </div>

              <div className="apiHeader" onClick ={() => this.setState({ showingOther: !showingOther })} >
                  <h2 id="apiTitle" > Inspirational Quotes API </h2>
              </div>

              <div >
                 <div style={{ display: (showingOther ? 'block' : 'none' ) }} >
                     <Methods {...this.state.method} />
                 </div>
              </div>

            </div>
         </div>
       
       </div>
     )
 };

}

export default Operations;