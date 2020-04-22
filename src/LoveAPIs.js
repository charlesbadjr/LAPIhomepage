import React, {Component} from 'react';



class LoveAPI extends React.Component{

   state = {showingLove: false,  };


    render () {
      const {showingLove } = this.state;
      return (
       <div  > 
          <h2  style={{ color:'white'}}  > Love API </h2>
         <div onClick ={() => this.setState({ showingLove: !showingLove })}> 
            <h3 style={{ color:'slate'}} > Methods: </h3> 
         </div>
         <div>
             <ul style={{ display: (showingLove ? 'block' : 'none' ) }} > 
                 < li > Quote of the Day </li>
                 < li > Random Quote </li>
                 < li > Request 10 Quotes </li>
             </ul >
         </div>
       </div>
    )}
}
  
export default LoveAPI;

