import React from 'react';


export default function LoveDetails( ) {
  const URLadd = ("https://us-central1-loveapi.cloudfunctions.net/app/lovequotes/read");

    return ( 
        <div>
          <div> 
              <h3> It workds! </h3>
          </div>
          <div style={{ alignContent:"right" }}> 
              <div className="methodButton"> <button> Get </button> </div>
              <div className="methodUrl"> 
                  <div> <p> {URLadd} </p> </div> 
              </div>
          </div>
       </div>   
    );
}
