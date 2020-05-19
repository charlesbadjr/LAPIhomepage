import React, {Component} from 'react';
import Refactortest from './refactortest.js';

class Methods extends Refactortest {
   state = {showingMethods: true, isLoading: false,
              quotes:'' 
      
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
           <h5 style={{ color: 'white' }}>  {this.apiDescription} </h5>
           <h2 > Methods: </h2>
           {this.props.methods.map((m, i) => {
              return (

         <div className="methodAndTitleContainer" >
             <div style={{ display: (showingMethods? 'block' : 'none' ) }} > 
               <div className="methodAndTitle" > 
                  <div className="methodTitleBox" >
                    <h4 id="methodTitle" > {m.name}: </h4>
                  </div>
                  <div className="methodBox" > 
                     <div className="methodBoxURL"> 
                         <p> {m.url} </p> 
                     </div> 
                     <button id="button" > Get </button>
                     
                  </div>
                     
               </div>  

             </div >
         </div>
           )})};
       </div>
    )};
}
  
export default Methods;
