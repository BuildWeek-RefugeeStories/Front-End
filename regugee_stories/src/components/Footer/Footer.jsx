import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <div>
                <p>Contact Us:</p>
                <p>
                    <span>Street Number</span>
                    <span>City</span>
                    <span>State, ZIP</span>
                </p>
                <p>
                    <span>(XXX)-XXX-XXXX</span>
                    <span>sample@email.com</span>
                </p>
            </div>

            <div>
                <Link to="/login" className="admin-btn">
                    Admin Login
                </Link>
                <a href="#">Privacy Policy</a>
                <a href="#">About Us</a>
            </div>
        </div>
    );
}

export default Footer;
