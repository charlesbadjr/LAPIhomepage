import React, {Component} from 'react';
import MethodComp from './MethodComp.js';


// I can pass method info into the MethodsComponent to reuse it. 

class Operations extends Component { 
     state = {showingOps: false, showingLove: false, showingOther: false,
               isLoading: false, quote:'', 

               method:{  methodTitle:'Get All Quotes', 
                         url:'https://us-central1-loveapi.cloudfunctions.net/app/lovequotes',
                         method:'read', number:'4' }
            };

       toggleOps = () => {
          this.setState(prevState => ({
            displayOps: !prevState.displayOps
          }));

       }  
 
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
                 <MethodComp mNumber={this.state.method.number} mMethod={this.state.method.method} mUrl={this.state.method.url} mTitle={this.state.method.methodTitle} 
                               author={this.state.quote.author} body={this.state.quote.quote} />
              </div>

              <div className="apiHeader" onClick ={() => this.setState({ showingFlirty: !showingFlirty })} >
                   <h2 id="apiTitle" > Flirty Quotes API </h2>
              </div>

              <div >
                 <div style={{ display: (showingFlirty ? 'block' : 'none' ) }} >
                    <MethodComp mNumber={this.state.method.number} mMethod={this.state.method.method} mUrl={this.state.method.url} mTitle={this.state.method.methodTitle} 
                               author={this.state.quote.author} body={this.state.quote.quote} />
                 </div>
              </div>

              <div className="apiHeader" onClick ={() => this.setState({ showingOther: !showingOther })} >
                  <h2 id="apiTitle" > Inspirational Quotes API </h2>
              </div>

              <div >
                 <div style={{ display: (showingOther ? 'block' : 'none' ) }} >
                    <MethodComp author={this.state.quote.author} body={this.state.quote.quote} />
                 </div>
              </div>

            </div>
         </div>
       
       </div>
     )
 };

}

export default Operations;