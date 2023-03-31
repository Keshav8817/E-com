import React from "react";


function Footer(){
    return(
        <>
        <div className="footer">
        <div className="fcontener">
        <div className="row">
            <div className="footer-col-1">
                <h3>Download Our App</h3>
                <p>Download App for Android and ios mobile phone</p>
                <div className="app-logo">
                    <img src="/images1/play-store.png" />
                    <img src="/images1/app-store.png" />
                </div>
            </div>
            <div className="footer-col-2">
               <img src="/images1/Logo.jpg" />
                <p>Our perpose is to sustainably make the pleasure and benefits of sports accessiblevto the many</p>
            </div>
            <div className="footer-col-3">
                <h3>Useful Links</h3>
                <ul>
                    <li>coupns</li>
                    <li>Blog Post</li>
                    <li>Return policy</li>
                    <li>Join Affiliate</li>
                </ul>
            </div>
            <div className="footer-col-4">
                <h3>Follow us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>INstagram</li>
                    <li>YouTube</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="Copyright">Copyright 2021 - MN Company</p>
    </div>
    </div>
</>
    )
}
export default Footer