import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import { Spinner } from 'reactstrap';

import { connect } from 'react-redux';

import { fetchUnapprovedPosts } from '../../actions';

import StoriesCards from '../HomePage/RecentStories/StoriesCards';

const AwaitingApproval = props => {
  useEffect(() => {props.fetchUnapprovedPosts()}, [props.approving]);

  return (
    <div className="awaiting-approval">
      <div className="rs-Top">
        <h1>Awaiting Approval</h1>
        <Link to="/" className="awaiting">
          Go to Home
        </Link>
      </div>
      <div className="body">
        {props.fetchingPosts ? (
          <Spinner className="spinner" type="grow" />
        ) : props.fetchError ? (
          <div className="error">{props.fetchError}</div>
        ) : props.posts.length === 0 ? (
          <span>There are no posts awaiting approval.</span>
        ) : (
          props.posts.map(data => {
            return <StoriesCards key={data.id} {...data} />;
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  fetchingPosts: state.fetchingPosts,
  fetchError: state.fetchPostError,
  posts: state.posts,
  level: state.level,
  approving: state.approving
});

export default connect(mapStateToProps, {fetchUnapprovedPosts}) (AwaitingApproval);
