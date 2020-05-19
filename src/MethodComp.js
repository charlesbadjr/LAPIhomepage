import React from 'react';
import ApiDetails from './ApiDetails.js';

function MethodComp(props) {
 
    return (
       <div>    
          <h2 > Methods: </h2>
          <div className="methodAndTitleContainer" >
                 {props.method.map((m, i) => {
                    return (
                       <div>    
                        <div className="methodAndTitle" > 
                           <div className="methodTitleBox" >
                              <h4 id="methodTitle" > {this.props.methods.name} </h4>
                           </div>
                        
                           <div className="methodBox" > 
                              <div className="methodBoxURL"> 
                                 <p> {this.props.methods.url} </p> 
                              </div> 
                              <button id="button" > Get </button>
                           </div>
                        
                         </div>  
                         <div> 
                           <ApiDetails {...props} /> 
                         </div>
                      </div>
                      );
                  })}
          </div > 
       </div>
    );
}


export default MethodComp;