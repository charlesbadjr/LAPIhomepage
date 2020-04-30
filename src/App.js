import React from 'react';
import Operations from './Operations.js';
import './App.css';




function App() {
  
  


   return ( 
      <div className="App-header">

        <header id="heartbeat"> The Love Hub </header>

         <div className="introBox" > 
           <p> We've organized all the love the internet has to offer in one accessable location. You can flip through the various Quotes offered to prove to that certain someone that,while you maynot have put all the effort into it, you still love them the same </p>
         </div>

         <div className="apiDocsContainer" >
            < Operations  />
         </div>
      
      </div>   
  );
}

export default App;
