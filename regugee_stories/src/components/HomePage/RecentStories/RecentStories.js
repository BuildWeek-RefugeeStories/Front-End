import React, { useEffect} from 'react';
import './RecentStories.css'
import StoriesCards from './StoriesCards';
import { Link } from 'react-router-dom';

import { Spinner } from 'reactstrap';


import { fetchPosts } from '../../../actions';

import { connect } from 'react-redux';


const RecentStories = props => {
    useEffect(() => {props.fetchPosts()}, []);

    return (
        <div className='RecentStories'>
              <div className='rs-Top'>
                  <h1>Recent Stories</h1>
                  { (props.level === 'admin' || props.level === 'owner') &&
                  <Link to="/awaiting" className='awaiting'>Awaiting Approval</Link>
                  }
                  </div>
              <div className='body'>
                  {props.fetchingPosts ? <Spinner className='spinner' type='grow' /> :
                      props.fetchError ? (
                        <div className='error'>
                            {props.fetchError}
                        </div>
                      ) : props.posts.length === 0 ? (
                          <span>There are no posts to show.</span>
                      ) :
                      props.posts.map(data => {
                      return <StoriesCards key={data.id} {...data} /> 
                  })}
            
              </div>

        </div> /* RecentStories end */
    )
}

const mapStateToProps = state => ({
    posts: state.posts,
    fetchingPosts: state.fetchingPosts,
    fetchError: state.fetchPostError,
    level: state.level
});

export default connect(mapStateToProps, { fetchPosts }) (RecentStories);