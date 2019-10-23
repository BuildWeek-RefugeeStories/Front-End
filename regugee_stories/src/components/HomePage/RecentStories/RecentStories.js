import React from 'react';
import './RecentStories.css'
import StoriesCards from './StoriesCards';
import { Link } from 'react-router-dom';

const RecentStories = () => {
    return (
        <div className='RecentStories'>
              <div className='rs-Top'>
                  <h1>Recent Stories</h1>
                  <Link>Back to Home</Link>
              </div>
              <div>
                  <StoriesCards />
              </div>

        </div> /* RecentStories end */
    )
}

export default RecentStories;