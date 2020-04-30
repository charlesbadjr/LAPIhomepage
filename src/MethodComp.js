import React from 'react';
import ApiDetails from './ApiDetails.js';

function MethodComp(props) {
 
    return (
       <div>    
          <h2 > Methods: </h2>
          <div className="methodAndTitleContainer" >
              <div > 
                
              <div className="methodAndTitle" > 
                   <div className="methodTitleBox" >
                     <h4 id="methodTitle" > {props.mTitle}: </h4>
                   </div>
                   
                   <div className="methodBox" > 
                      <div className="methodBoxURL"> 
                          <p> {props.mUrl}/{props.mMethod}/{props.mNumber} </p> 
                      </div> 
                      <button id="button" > Get </button>
                   </div>
                   
                </div>  
                <div> <ApiDetails author={props.author} body={props.body} /> </div>
              </div >
          </div>
       </div>
    );
}


export default MethodComp;