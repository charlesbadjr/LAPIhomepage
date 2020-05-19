import React, {Component} from 'react';
import MethodComp from './MethodComp.js';
import Methods from './Methods.js';

// I can pass method info into the MethodsComponent to reuse it. 

class Refactortest extends Component { 
     state = { 
         apis: [{ 
             name: 'Love API',
             description: 'this api helps you when you have no social life',
             selected: false,
             methods: [{
                    name: 'Get All',
                    url:'https://us-central1-loveapi.cloudfunctions.net/app/lovequotes/read/',
                    description: 'returns json of all the quotes. Limit of 10 will be returned.'},
                { name: 'Get Count', 
                  url: 'https://us-central1-loveapi.cloudfunctions.net/app/lovequotes/countAll/', 
                  description: 'endpoint gives you overall count of entries currently in the api' },
                
                {name: 'Quote of The Day',
                 url: 'https://us-central1-loveapi.cloudfunctions.net/app/lovequotes/qod/',
                 description: 'Love Quote of the day. Helps you remember what needs to be said, any given day.'
                    }],
         },
            { name: 'Flirty API',
            description: 'Flirty Api Keeps you feeling alive and wanted!',
            selected: false, 
            methods: [{
                name: 'Get All',
                url:'https://us-central1-loveapi.cloudfunctions.net/app/flirtyquotes/read/',
                description: 'returns json of all the quotes. Limit of 10 will be returned.'},
                { name: 'Get Count', 
                  url: 'https://cloud', 
                  description: 'endpoint gives you overall count of entries currently in the api' },
                
                {name: 'Quote of The Day',
                 url:'https://us-central1-loveapi.cloudfunctions.net/app/flirtyquotes/qod/',
                 description: 'Renders a Single Quote of the day. You can pass in paramiters to find Quotes of past days'
                    }],
         },
           {name: 'Motivational API',
           description: 'This api will keep you from collecting dust. Unless you are a web developer.',
           selected: false,
           methods: [{
            name: 'Get All',
            url:'https://cloudflair/loveapi/',
            description: 'returns json of all the quotes. Limit of 10 will be returned.'},
            { name: 'Get Count', 
              url: 'https://cloud', 
              description: 'endpoint gives you overall count of entries currently in the api' },
            
            {name: 'Quote of The Day',
             url: 'https://cloudflair/loveapi/qod',
             description: 'gives you shit in your face'
                }],
         }],   
        isLoading: false, showingOps: true, quote:[] 
    };


      showToggle = (e) => {
          const { apis } = this.state;
          const { id } = e.target; 
          apis[id].selected = !this.state.apis[id].selected
          this.setState({ apis })
      };


       
     
   render(){
       const { showingOps } = this.state;
       return (
      
       <div className="opsContainer" >  

          <div className="opsParent" id="opsParent" onClick ={() => this.setState({ showingOps: !showingOps })} >
             <h1 id="opsTitle" > Developers Guide: </h1>
          </div>

           <div >
              <div style={{ display: (showingOps ? 'block' : 'none' ) }} >
                  {this.state.apis.map((p, i) => {
                      return (
                       <div>
                         <div className="apiHeader"  onClick = {this.handleClick } >
                           <h2 id="apiTitle" > {p.name}  </h2>
                         </div>
  
                         <div style={{ display: ( showingOps? 'block' : 'none' ) }} >
                           <Methods key={i} id={i} apiDescription={p.description} methods = {p.methods} />
                         </div>
                       </div>
                      );
                   })}
              </div>
           </div>
      </div>
   );
 }
}

export default Refactortest;