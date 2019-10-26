import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <div>
                <p>Contact Us:</p>
                <p>
                    <span>7458 Technology Drive</span>
                    <span>Irvine</span>
                    <span>CA, 92604</span>
                </p>
                <p>
                    <span>(800)-123-4567</span>
                    <span>notreal@refugee-stories.com</span>
                </p>
            </div>

            <div>
                <Link to='/login' className="admin-btn" href="#">
                    Admin Login
                </Link>
                <a href="#">Privacy Policy</a>
                <a href="#">About Us</a>
            </div>
        </div>
    );
}

export default Footer;
