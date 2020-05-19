import React from 'react';


function ApiDetails(props) {

 
  return (
    <div >
      <h4> {props.body} </h4>
      <a> {props.author} </a>
    </div>
  )
}

export default ApiDetails;