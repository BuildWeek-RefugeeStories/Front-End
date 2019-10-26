import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

import { logout } from '../../actions';

import { connect } from 'react-redux';

import { Button, Popover, PopoverBody} from 'reactstrap';

const Navbar = props => {
  const [popoverOpen, togglePopover] = useState(false);

  const toggle = () => togglePopover(!popoverOpen);

  return (
      <div className='NavBar'>
          <div className='refugee-Link'>
            <a>Refugee Stories</a>
          </div>
          <div className='navBar-Links'>
            <Link to='/'>Stories</Link>
            <Link to='/stories'>Submit a Story</Link>
            {
              props.token ? (
                <div className='user-info'>
                  <Button id="Popover" type='button'>{`${props.firstName} ${props.lastName}`}</Button>
                  <Popover placement='bottom' isOpen={popoverOpen} target="Popover" toggle={toggle}>
                    <PopoverBody>
                      <Button color="danger" onClick={props.logout}>Log Out</Button>
                    </PopoverBody>
                  </Popover>
                </div>
              ): (
            <Link to='/login'>Log In/Register</Link>
              )
            }
          </div> {/* navBar-Links end */}
      </div> /* NavBar end */
  )
}

const mapStateToProps = state => ({
  token: state.token,
  firstName: state.firstName,
  lastName: state.lastName
});

export default connect(mapStateToProps, { logout })(Navbar);