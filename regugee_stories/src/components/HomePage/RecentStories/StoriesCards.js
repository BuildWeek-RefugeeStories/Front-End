import React, { useState } from "react";

import moment from "moment";

import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";

import { connect } from "react-redux";

import { approve, clearErrors } from "../../../actions";

const StoriesCards = props => {
  // This is for the modal
  const [confirmApprove, setConfirmApprove] = useState(false);
  const [showError, setShowError] = useState(false);

  const toggleConfirm = () => setConfirmApprove(!confirmApprove);
  const toggleError = () => setShowError(!showError);

  const toggleAndApprove = () => {
    props.approve(props._id)
    .then(() => {
        if(!props.approveError) {
            console.log(props.approveError);
            setConfirmApprove(false);
        }
    });
  };

  return (
    <div className="StoriesCards">
      <div className="stories-info">
        <div className="story-Title">
          <h1>{props.title}</h1>
          <h3>{props.author.name}</h3>
          <h5>{moment(props.createdAt, "x").format("MMM Do YYYY, h:mm a")}</h5>
        </div>
        <div className="story-Text">
          <p>{props.body}</p>
        </div>
      </div>{" "}
      {/* stories-info end */}
      <div className="card-Img">
        <img
          alt={props.title}
          src="https://pbs.twimg.com/media/DvUzKCSWwAA3FbS.jpg"
        ></img>
        {!props.approved && (
          <Button onClick={toggleConfirm} className="approve-btn">
            Approve
          </Button>
        )}
      </div>
      <Modal isOpen={props.approveError ? true : false} toggle={toggleError} >
          <ModalBody><span className='error'>{props.approveError}</span></ModalBody>
          <ModalFooter>
              <Button onClick={props.clearErrors}>Dismiss</Button>
          </ModalFooter>
      </Modal>
      <Modal isOpen={confirmApprove} toggle={toggleConfirm}>
        <ModalBody>Are you sure you want to approve this post?
        </ModalBody>
        <ModalFooter>
          <Button disabled={props.approving} onClick={toggleAndApprove}>Approve</Button>
          <Button disabled={props.approving} onClick={toggleConfirm}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div> /* StoriesCards end */
  );
};

const mapStateToProps = state => ({
    approving: state.approving,
    approveError: state.approveError
});

export default connect(
  mapStateToProps,
  { approve,
    clearErrors }
)(StoriesCards);
