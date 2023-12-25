import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="containerMap">

                <div id="map-container-google-1" className="z-depth-1-half map-container p-5 mt-5" >
                    <iframe title='GoogleMap'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.139308137293!2d13.399815615669599!3d52.53091364317308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85180d9075183%3A0xbba8c62c3dc41a7d!2sBarbabella%20Barbershop!5e0!3m2!1sen!2s!4v1677398800443!5m2!1sen!2s"
                        width="100%" height="450" allowFullscreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="container mt-5">
        <div className="row">
            <div className="col-lg-6 ">
                <h2>Contact Information</h2>
                <p id='phoneNumber'>(+49) 120-240-3600 <br/>
                     hello@barber.beauty</p>
                <div className='d-flex justify-content-between col-lg-4 '>

                <a className="btn btn-facebook btn-social-icon bg-danger text-white" href='/'>
                    <i className="fa fa-facebook"></i>
                </a>
                <a className="btn btn-twitter btn-social-icon bg-danger text-white" href='/'>
                    <i className="fa fa-twitter"></i>
                </a>
                <a className="btn btn-instagram btn-social-icon bg-danger text-white" href='/'>
                    <i className="fa fa-instagram"></i>
                </a>
                <a className="btn btn-youtube text-white btn-social-icon bg-danger" href='/'>
                    <i className="fa fa-youtube fa-lg"></i>
                </a>
                <a className="btn btn-whatsApp text-white btn-social-icon bg-danger" href='/'>
                    <i className="fa fa-whatsapp"></i>
                </a>
                </div>
            </div>

            <div className="col-lg-6 col-11 mt-lg-0 mt-5" id="outerDivColor">
                <div className="innerDiv">
                    <i className="fa fa-home fa-lg  " id="icon"></i>
                    <h2 className="text-white">OPEN DAILY</h2>
                    <h2 className="text-">10:00 AM - 8:00 PM</h2>
                </div>
            </div>

        </div>
    </div>

        </>
    )
}
