import React, {Component} from 'react';



class LoveAPI extends Component{

   state = {showingLove: false,  };


    render () {
      const {showingLove } = this.state;
      return (
       <div  onClick ={() => this.setState({ showingLove: !showingLove })} > 
          <h2  style={{ color:'white', textAlign:'left' }}  > Love API </h2>
         <div >
             <ul style={{ display: (showingLove ? 'block' : 'none' ) }} > 
                 < li > 
                    <div>
                        <h4>Quote of the Day </h4>
                    </div>
                    <div>
                       <span> <a> LoveQuote Endpoint slash Quote Of the Day </a> </span>
                    </div>
                 </li>
                 < li > 
                       Random Quote 
                    <div>
                      
                    </div>
                 </li>
                 
                 < li > Request 10 Quotes 
                    <div >

                    </div>
                 </li>
             </ul >
         </div>
       </div>
    )}
}
  
export default LoveAPI;

