import React, { useState , useEffect} from 'react';
import './RecentStories.css'
import StoriesCards from './StoriesCards';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../../../utils/axiosWithAuth';




const RecentStories = ({articles}) => {

    const [newData , setNewData] = useState()

    useEffect(() => {
        getApprovedArticle();
    }, [])

    const getApprovedArticle = () => {
        axiosWithAuth()
        .get(`https://refugee-stories-api19.herokuapp.com/posts/`)
        .then(res => {
            res.data.map(result => {
                console.log('results approved value...',result.approved)
                if(result.approved === true) {
                setNewData(result)
                console.log('NewData', newData)
            }
            })
            console.log('Res value...', res)
        })
        .catch(err => console.log(err))
    }
     
    return (
        <div className='RecentStories'>
              <div className='rs-Top'>
                  <h1>Recent Stories</h1>
                  <Link>Back to Home</Link>
              </div>
              <div>
                   {/* {JSON.stringify(newData)} */}
                   {newData && <StoriesCards newData={newData} />}
              </div>

        </div> /* RecentStories end */
    )
}

export default RecentStories;