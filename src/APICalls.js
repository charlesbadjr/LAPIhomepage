import React from 'react';



function APICalls(props) {
 

    return (
      <ul> 
         {quotes.map(quotes=> 
          <li key={quotes.objectID}>
            <p> {quotes.quotes} </p> <a> {quotes.author}</a>
          </li> )}
      </ul>
    )
  };

export default APICalls;