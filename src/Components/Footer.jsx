import React from 'react'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <hr/>
            <div className="foot">
                <div className="left">
                    <img src= {logo} alt=''/>
                    <p>ApnaPG</p>
                </div>
                <div className="right">
                    <div className="itm">
                        <p className='head'>Resources</p>
                        <p>Home</p>
                        <p>About</p>
                    </div>
                    <div className="itm">
                        <p className='head'>Follow Us</p>
                        <p>Instagram</p>
                        <p>Youtube</p>
                    </div>
                    <div className="itm">
                        <p className='head'>Legal</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>

            <hr/>
            <div className='credit'>
            © 2024 ApnaPG. All Rights Reserved.
            </div>
        </footer>
    );
}