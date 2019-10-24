import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeCard from '../Home/HomeCard';
import { Link } from 'react-router-dom';

const HomePage = props => {
    const [newData , setNewData] = useState([])

    useEffect(() => {
        axios
        .get(`https://refugee-stories-api19.herokuapp.com/posts/`)
        .then(res => {
            setNewData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])




    
    return (
        <div className='HomePage' >
              <div className='rs-Top'>
                  <h1>Stories Awaiting Approval</h1>
                  <Link>Logout</Link>
              </div>
              <div>
                  {newData.map(data => {
                      console.log('Data Value...', data)
                      return <HomeCard key={data.id} data={data} /> 
                  })}
              </div>
        </div> /* HomePage end */
    );
};

export default HomePage;
