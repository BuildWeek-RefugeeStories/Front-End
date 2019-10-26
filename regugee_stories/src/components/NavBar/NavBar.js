import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import { logout } from "../../actions";

import { connect } from "react-redux";

import { Button, Popover, PopoverBody } from "reactstrap";

const Navbar = props => {
  const [popoverOpen, togglePopover] = useState(false);

  const toggle = () => togglePopover(!popoverOpen);

  const logout = () => {
    togglePopover(false);
    props.logout();
  }

  return (
    <div className="NavBar">
      <div className="refugee-Link">
        <a>Refugee Stories</a>
      </div>
      <div className="navBar-Links">
        <Link to="/">Stories</Link>
        <Link to="/submitstory">Submit a Story</Link>
        <Link to="/getinvolved">Get Involved</Link>
        {props.token ? null : <Link to="/login">Log In/Register</Link>}
        <div className={`user-info ${props.token ? null : 'hidden'}`}>
          <Button
            id="Popover"
            type="button"
          >{`${props.firstName} ${props.lastName}`}</Button>
          <Popover
            placement="bottom"
            isOpen={popoverOpen}
            target="Popover"
            toggle={toggle}
          >
            <PopoverBody>
              <Button color="danger" onClick={logout}>
                Log Out
              </Button>
            </PopoverBody>
          </Popover>
        </div>
      </div>{" "}
      {/* navBar-Links end */}
    </div> /* NavBar end */
  );
};

const mapStateToProps = state => ({
  token: state.token,
  firstName: state.firstName,
  lastName: state.lastName
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
