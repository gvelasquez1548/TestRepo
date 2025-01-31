import React from "react";
import './Footer.css'
 
const Footer = () => {
    return (
        <div className='Footer-Container'>
            <div className="Business-Info-Container">
                <h1>Contact</h1>
                <h2>Address</h2>
                <p><strong>17229 Lemon St</strong></p>
                <p><strong>Hesperia, CA 92345</strong></p>
                <p><strong>Building #16</strong></p>
                <h2>Phone Number</h2>
                <p><strong><a href="tel+17609814267">(760) 981-4267</a></strong></p>
                <h2>Hours of Operation</h2>
                <p><strong>Mon-Fri: 8am-4pm</strong></p>
                <p><strong>Weekend: Closed</strong></p>
                <a href="http://www.instagram.com/ELITE_SURPLUS_D/"
                ><div className="insta-icon"></div></a>
                <a href="https://www.facebook.com/EliteSurplusDistributors/">
                <div className="face-icon"></div></a>
            </div>
            <div className="Contact-Container">
                <form action="" method="POST">
                    <input type="text" id="name" name="name" placeholder="Name" required/>
                    <input type="email" id="email" name="email" placeholder="Email" required/>
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" required/>
                    <input type="text" id="subject" name="subject" placeholder="Subject" required/>
                    <textarea name="message" id="message" placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
 
        </div>
    )
 
}
 
export default Footer