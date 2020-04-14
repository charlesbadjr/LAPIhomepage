import React from 'react';
import LoveAPI from './LoveAPIs.js';
import OtherAPI from './OtherAPIs.js';
import FlirtyAPI from './FlirtyAPIs.js';
import './App.css';


const LoveAPI_URL = "https://us-central1-loveapi.cloudfunctions.net/app/lovequotes/";
const FlirtyAPI_URL = "https://us-central1-loveapi.cloudfunctions.net/app/lovequotes/";
const OtherAPI_URL = "https://us-central1-loveapi.cloudfunctions.net/app/lovequotes/";

const Sectionss = ({ Toggle }) => (
  <div className="Sections">
    <button name="LoveAPI" onClick={Toggle}> LoveAPI </button>
    <button name="FlirtyAPI" onClick={Toggle}> FlirtyAPI </button>
    <button name="OtherAPI" onClick={Toggle}> OtherAPI </button>
  </div>
);

const Main = ({ activeSection }) => (
  <React.Fragment>
      <LoveAPI activeSection={activeSection}/>
      <FlirtyAPI activeSection={activeSection}/>
      <OtherAPI activeSection={activeSection}/>
  </React.Fragment>
);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: ""
    };
    this.handleToggleSection = this.handleToggleSection.bind(this);
  }

  handleToggleSection(e) {
    const { name } = e.target;
    this.setState(()=> ({
      activeSection: name
    }));
  }


  render() {
     return ( 
      <div className="App-header">
        <header id="heartbeat">The Love Hub </header>
         <div className="introBox" > 
           <p> We've organized all the love the internet has to offer in one accessable location. You can flip through the various Quotes offered to prove to that certain someone that,while you maynot have put all the effort into it, you still love them the same" </p>
         </div>
         <div className="apiDocsContainer" >
           <div >
             <Sectionss onToggle={this.handleToggleSection}/>
             <Main activeSection={this.state.activeSection}/> 
           </div>
         </div>
      </div>   
  );
 }
}

export default App;
