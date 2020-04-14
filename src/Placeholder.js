

<div className="App-header">
        <header id="heartbeat">The Love Hub </header>
         <div className="introBox" > 
           <p> We've organized all the love the internet has to offer in one accessable location. You can flip through the various Quotes offered to prove to that certain someone that,while you maynot have put all the effort into it, you still love them the same" </p>
         </div>

         <div className="apiDocsWrap" >
           <ul id="apidocs-resources-container"> 
             <li className="resource" id="resource_Love"> 
                <div className="apiHeader"> 
                    <h2> Love APIs </h2>
                    <span> 
                      <a> Love Quotes </a> 
                    </span>
                    
                    <div className="apiBubble" >
                      <div className="action" > 
                       <a className="toggle"> All Love Quotes </a> 
                      </div> 
                    </div> 
                    
                    <div className="path_method" >
                      <span className="path">
                        <a> {LOVEAPI_URL}Read </a>
                      </span>  
                      <span className="method" > 
                        <a> GET </a>
                      </span>
                    </div>
                    <div className="content">
                      <h4> Description: </h4>
                      <p> Love quotes come out with Author, Quote, and Tags. </p>
                      <ul className="options">
                         <li >
                           <span><a> Daily Quotes </a> </span> 
                         </li>
                         <li >
                           <span><a> Random Quotes </a> </span> 
                         </li>
                         <li >
                           <span><a>Tagged Quotes </a> </span> 
                         </li>
                         <li >
                           <span><a>Search Quotes </a> </span> 
                         </li>
                      </ul>         
                    </div>

                </div> 
             </li>
             
             <li className="resource" id="resource_Flirty"> 
                  <div className="apiHeader"> 
                    <h2> Flirty Quotes </h2>
                    <span> 
                      <a> Quotes to up your game. </a> 
                    </span>
                    
                    <div className="apiBubble" >
                      <div className="action" > 
                       <a className="toggle"> Flirty Quotes All </a> 
                      </div> 
                    </div> 
                    
                    <div className="path_method" >
                      <span className="path">
                        <a> {LOVEAPI_URL}/FlirtyQuotes/Read </a>
                      </span>  
                      <span className="method" > 
                        <a> Get </a>
                      </span>
                    </div>
                  </div>

                  <div className="content">
                      <h4> Description: </h4>
                      <p> Flirty quotes are not suited for children. </p>
                      <ul className="options">
                         <li >
                           <span><a> Daily Flirt </a> </span> 
                         </li>
                         <li >
                           <span><a> Random Flirt </a> </span> 
                         </li>
                         <li >
                           <span><a>Tagged Flirt </a> </span> 
                         </li>
                         <li >
                           <span><a>Search Flirty Quotes </a> </span> 
                         </li>
                      </ul>         
                    </div> 
             </li>

             <li className="resource" id="resource_Other">
                <div className="apiHeader"> 
                  <h2> Other APIs </h2>
                    <span> 
                      <a> Some extra mile stuff that will keep you moving. </a> 
                    </span>
                    
                    <div className="apiBubble" >
                      <div className="action" > 
                       <a className="toggle"> Inspirational Quotes </a> 
                      </div> 
                    </div> 
                    
                    <div className="path_method" >
                      <span className="path">
                        <a>Get All Inspirational Quotes </a>
                      </span>  
                      <span className="method" > 
                        <a> GET </a>
                      </span>
                    </div>
                   
                </div> 
                <div className="content">
                  <h4> Description: </h4>
                    <p> Feel good stuff for the boy too. </p>
                    <ul className="options">
                      <li >
                        <span><a> Daily Inspirational</a> </span> 
                      </li>
                      <li >
                      <span><a> Random Random Inspirational </a> </span> 
                      </li>
                      <li >
                        <span><a>Tagged Inspirational </a> </span> 
                      </li>
                      <li >
                        <span><a>Search </a> </span> 
                      </li>
                    </ul>         
                 </div> 
             </li>   


           </ul>
         </div>
      </div> 