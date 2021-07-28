import React, {Component} from 'react';
import MethodComp from './MethodComp.js';
import Methods from './Methods.js';

// I can pass method info into the MethodsComponent to reuse it. 

class Operations extends Component { 
     state = {showingOps: false, showingLove: false, showingOther: false,
               isLoading: false, quote:'', 
         apis: [{
                   name: 'Love Api',
                   showing: false,
                   description: "Awesome API that helps you with your Love Owes",
                   method:[{  name:'Get All Quotes', 
                           url:'https://us-central1-loveapi.cloudfunctions.net/app/lovequotes',
                            
                           description:'This endpoint gets upto ten quotes'},
                         { name:'Get Quote By ID', 
                           url:'https://us-central1-loveapi.cloudfunctions.net/app/lovequotes',
                            
                           description:'This method will get a specific Quote by its ID' },

                         { name:'Get The Quote Of The Day', 
                           url:'https://us-central1-loveapi.cloudfunctions.net/app/lovequotes',
                            
                           description:'This endpoint will give you the quote of the day to share with your friends'}
                   ]},
                   {
                      name: 'Flirty Api',
                      showing: false,
                      description: "This little gem will get you into a bed during the quantine",
                      method: [{
                         name: "Get All Quotes",
                         url: 'https://us-central-loveapi.cloudfunctions.net/app/flirtyapi',
                         description: "You can have all these quotes, atleast 10, with one call "
                      }]
                   }
            
         ]};

 
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
