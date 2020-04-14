import React from 'react';
import axios from 'react-axios';


function APICALLs {

    APICALL() {
        axios.get(`https://us-central1-loveapi.cloudfunctions.net/app/lovequotes/read`).then(res => {
            const quotes = res.data;
            this.setState({quotes});
        })
    }
}



export default APICALLs;