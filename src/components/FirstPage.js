import React from 'react'
import me from '../images/Me.jpg'
import barber1 from '../images/barber1.jpg'
import '../styles/FirstPage.css'
// import OurHistory from '../components/OurHistory'
import { Link } from 'react-router-dom'

export default function FirstPage() {
    return (
        <>
            <div className="container-fluid jumbotron pt-5 pb-5 ps-5 ">
                <div className="row justify-content-between align-items-end">
                    <div className="col-12 col-md-6  col-lg-6 col-xl-6 col-xxl-6" id="welcomNote">
                        <h2 className='text-white'>WELCOME TO</h2>
                        <h1 data-text="BARBELLA" id='span' className='mt-3'>BARBELLA</h1>
                        <h1 data-text="BARBERSHOP" id='span1'>BARBERSHOP</h1>
                        <div>

                            <p className='paraGraph' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod facere deleniti architecto corporis tenetur,<br />
                                ex assumenda repellat maxime fugit, perspiciatis dignissimos cumque nam recusandae neque animi suscipit! Veritatis, possimus. </p>
                            <button className="btn text-white jumbotonBtn1" id="jumbotronButton1" data-target="" >
                                <Link to="/ourhistory" style={{ textDecoration: "none", color: "white" }} >
                                    About Us
                                </Link>

                            </button>
                            <button className="btn btn-danger jumbotonBtn2" id="jumbotronButton2" data-target="" >
                                <Link to={"services"} style={{ textDecoration: "none", color: "white" }}>
                                    What We Do
                                </Link>
                            </button>
                        </div>

                    </div>

                    <div className="col-4 col-md-4 col-xl-3 col-xxl-3 mt-5 ">
                        <div className="mainBook mt-5 text-center">
                            <br />
                            <div className="text-white mt-5">
                                <div className='mt-5'>

                                    <h6 className="heading_2" >Hurry Up! Get a Good Hair Cut.</h6>
                                    <button className="btn text-white btn-danger col-6" id="bookBtn" >
                                        <strong>
                                            Book a Seat
                                        </strong>
                                    </button>
                                </div>

                            </div>
                            <center>
                                <div className="imageDiv col-4 ">
                                </div>
                            </center>


                        </div>
                    </div>
                </div>
            </div>





            <div className="container mt-5">
                <div className="">
                    <h3 className='text-danger'>BEST HAIRDRESSERS</h3>
                    <p>
                        Where every strand finds its perfect style. Elevating hair artistry one cut at a time. Welcome to the realm of the best hair magicians. <strong> <span className="text-warning ">Crafting confidence</span> </strong>, one snip and style at a time. Our shears weave magic into every strand, making dreams a reality. Step into our salon and let your hair tell its story in style. </p>
                </div>
            </div>


            <div className="container mt-5" id="barbersConatiner">
                <h3 className="text-danger">MEET BARBERS</h3>
                <div className="row row-content justify-content-evenly mt-md-5" id="meetBarber">
                    <div className="col-5" id="outerDiv1">
                        <img src={barber1} alt="" height="100%" width="100%" id="tiltImg" />
                        <button className="btn col-12 col-md-12 bg-white mx-1" id="btnBarbers">REDO
                            <a className="btn btn-social-icon btn-facebook bg-danger mx-1 text-white" href='/'><i className="fa fa-facebook"> </i> </a>
                            <a className="btn btn-social-icon btn-instagram bg-danger mx-1 text-white" href='/'><i className="fa fa-instagram"></i> </a>
                            <a className="btn btn-social-icon btn-whatsApp bg-danger  mx-1 text-white" href='/'><i className="fa fa-whatsapp"></i></a>
                        </button>
                    </div>
                    <div className="col-5 " id="outerDiv2">
                        <img src={me} className="" alt="" height="100%" width="100%" id="tiltImg" />
                        <button className="btn col-12  col-md-12 bg-white mx-1" id="btnBarbers">EHTI
                            <a className="btn btn-social-icon btn-facebook bg-danger mx-1 text-white" href='/'><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-instagram bg-danger mx-1 text-white" href='/'><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon btn-whatsApp bg-danger text-white mx-1" href='/'><i className="fa fa-whatsapp"></i> </a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-12 col-md-12" id="middleSection">
                        <center>
                            <h1 className="text-danger mt-4" id="headingJumb2">Get 32% Discount</h1>
                            <p className="text-white" id="paraJumb2">On every second week of the month</p>
                            <button className="btn btn bg-warning" id="btnJumb2">Promo Code:BarBerMo</button>
                        </center>

                    </div>
                </div>
            </div>


            {/* PRICE LIST SECTION */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-7">
                        <h1 className="priceHeading">Price List</h1>
                        <p className='priceListPara' >Starting at $25</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center">Hair Cut
                                <span className="badge bg-primary rounded-pill">

                                    $32.00
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Bead Trim
                                <span className="badge bg-primary rounded-pill">

                                    $26.00
                                </span>


                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">Razor Cut
                                <span className="badge bg-primary rounded-pill">

                                    $36.00
                                </span>

                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">Shaves
                                <span className="badge bg-primary rounded-pill">

                                    $30.00
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">Styling / Color
                                <span className="badge bg-primary rounded-pill">

                                    $25.00
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-5  ">
                        <div id="colorDiv">
                            <div className="backgroundOnly">
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Contact Information Section */}

            <div className="container-fluid d-flex justify-content-center mt-5" id="SayHello">
                <h1>Say Hello</h1>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="" alt="" />
                        <h2>Contact Information</h2>
                        <p className='sayHelloParaa' >(+49) 120-240-3600 <br />
                            hello@barber.beauty</p>
                        <a className="btn btn-facebook btn-social-icon bg-danger" href='/'>
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a className="btn btn-twitter btn-social-icon bg-danger" href='/'>
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="btn btn-instagram btn-social-icon bg-danger" href='/'>
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a className="btn btn-youtube text-white btn-social-icon bg-danger" href='/'>
                            <i className="fa fa-youtube"></i>
                        </a>
                        <a className="btn btn-whatsApp text-white btn-social-icon bg-danger" href='/'>
                            <i className="fa fa-whatsapp"></i>
                        </a>
                    </div>

                    <div className="col-lg-6 col-11 mt-lg-0 mt-5" id="outerDivColor">
                        <div className="innerDiv">
                            <i className="fa fa-home fa-lg " id="icon"></i>
                            <h2 className="text-white">OPEN DAILY</h2>
                            <h2 className="text-light">10:00 AM - 8:00 PM</h2>
                        </div>
                    </div>

                </div>
            </div>

            {/* GOOGLE MAP */}
            <div id="map-container-google-1 " className="z-depth-1-half map-container p-5 mt-5" >
                <iframe id='googleMaps' title='googleMaps'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.139308137293!2d13.399815615669599!3d52.53091364317308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85180d9075183%3A0xbba8c62c3dc41a7d!2sBarbabella%20Barbershop!5e0!3m2!1sen!2s!4v1677398800443!5m2!1sen!2s"
                    width="100%" height="450" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* Branches information Section */}
            <div className="container mt-5">
                <h3>Our Branches</h3>
                <div className="row mt-3 justify-content-evenly">
                    <div className="col-lg-5 col-md col-sm col- grunberger">
                        <h4 className="text-danger">Grunberger</h4>
                        <p>Grunberger Str.31, <br /> 10245 Berlin, Germany </p>
                    </div>
                    <div className="col-lg-5 col-md col-sm col- behenstrabe">
                        <h4 className="text-danger">BehrenstraBe</h4>
                        <p>BehrenstraBe 27,10117 <br /> 10245 Berlin, Germany </p>
                    </div>
                    <div className="col-lg-2 col-md col-sm col- weinbergsweg">
                        <h4 className="text-danger">Weinbergsweg</h4>
                        <p>Weinbergsweg 23,10119 <br /> 10245 Berlin, Germany </p>
                    </div>
                </div>

                <div className="container mt-5">
                    <p>
                        Copyright © 2036 Barber Shop - Design TemplateMo

                    </p>
                </div>
            </div>
        </>

    )
}
