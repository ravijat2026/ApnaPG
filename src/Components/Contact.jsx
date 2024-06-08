import React from "react";
import './Contact.css'
import con_img from '../assets/contact.png'

function Contact(){
    return(
        <div className="contact">
                <div className="left">
                    <img src = {con_img} alt="" />
                </div>

                <div className="right">
                    <h1>Contact With Our Certified Agent</h1>
                    <p>Ready to find your perfect PG accommodation? Contact our team of property agents today to get started. Whether you're a student, working professional, or individual seeking comfortable and convenient living, we're here to help you find your ideal home away from home.</p>
                    <div className="btns">
                        <button>Make a Call</button>
                        <button>Get Appoinment</button>
                    </div>
                </div>
        </div>
    )
}

export default Contact