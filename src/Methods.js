import React, {Component} from 'react';

class Methods extends Component{
   state = {showingMethods: false, isLoading: false,
              quotes:'',
       method:{  methodTitle:'Get All Quotes', url:'https://us-central1-loveapi.cloudfunctions.net/app/lovequotes/',
                 method:'read', number:'4'} 
      
      };

      

      buttonClick = () => {
         this.setState({ isLoading: true });
         fetch('https://us-central1-loveapi.cloudfunctions.net/app/lovequotes/read/3')
         .then(response => response.json() )
         .then(quotes => this.setState({ quotes: quotes, isLoading:false }));
      }

  render () {
    const {showingMethods } = this.state;

      return (
       <div onClick ={() => this.setState({ showingMethods: !showingMethods })} > 
          <h2 > Methods: </h2>

         <div className="methodAndTitleContainer" >
             <div style={{ display: (showingMethods? 'block' : 'none' ) }} > 
               <div className="methodAndTitle" > 
                  <div className="methodTitleBox" >
                    <h4 id="methodTitle" > {this.state.method.methodTitle}: </h4>
                  </div>
                  <div className="methodBox" > 
                     <div className="methodBoxURL"> 
                         <p> {this.state.method.url}{this.state.method.method} </p> 
                     </div> 
                     <button id="button" > Get </button>
                     
                  </div>
                     
               </div>  

             </div >
         </div>

         <div className="methodAndTitleContainer" >
             <div style={{ display: (showingMethods? 'block' : 'none' ) }} > 
               <div className="methodAndTitle" > 
                  <div className="methodTitleBox" >
                    <h4 id="methodTitle" > {this.state.method.methodTitle}: </h4>
                  </div>
                  <div className="methodBox" > 
                     <div className="methodBoxURL"> 
                         <p> {this.state.method.url}{this.state.method.method} </p> 
                     </div> 
                     <button id="button" > Get </button>
                  </div>
                     
               </div>  

             </div >
         </div>

       </div>
    )};
}
  
export default Methods;
