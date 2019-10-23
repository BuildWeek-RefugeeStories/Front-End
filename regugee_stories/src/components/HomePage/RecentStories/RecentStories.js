import React, { useState , useEffect} from 'react';
import './RecentStories.css'
import StoriesCards from './StoriesCards';
import { Link } from 'react-router-dom';
import axios from 'axios';


const RecentStories = () => {

    const [newData , setNewData] = useState([])

    useEffect(() => {
        axios
        .get('https://refugee-stories-api19.herokuapp.com/posts')
        .then(res => {
            setNewData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })


    return (
        <div className='RecentStories'>
              <div className='rs-Top'>
                  <h1>Recent Stories</h1>
                  <Link>Back to Home</Link>
              </div>
              <div>
                  {newData.map(data => {
                      return <StoriesCards {...data} /> 
                  })}
            
              </div>

        </div> /* RecentStories end */
    )
}

export default RecentStories;