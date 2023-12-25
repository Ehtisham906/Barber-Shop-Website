import React from 'react'

export default function Services() {
  return (
    <>
    <div class="container text-center" id="servicesContainer">
        <div>
            <h1 class="text-danger" >Services</h1>
        </div>
        <div class="row justify-content-evenly ">
            <div class=" service1 col-10 col-md-5 col-xl-5 ">
                <div class="prtdiv1 d-flex justify-content-evenly  align-items-end">
                    <div class="prt1Heading mb-2">
                        <h4 class="servicesHeading text-white">CLASSIC HAIRCUT</h4>
                    </div>
                    <div class="prt1btn mb-2">
                        <button class="btn btn-warning" id="servicesBtn">$36.00</button>
                    </div>
                    <div class="prt1btn mb-2">
                        <button class="btn btn-success" id="servicesBtn"><a href="booking.html" class="nav-link"
                                target="_blank">Book Now</a> </button>
                    </div>
                </div>
            </div>
            <div class="  service2 col-10 col-md-5 mt-sm-2 mt-2 ">
                <div class="prtdiv1 d-flex  justify-content-evenly align-items-end">
                    <div class="prt1Heading mb-2">
                        <h4 class="servicesHeading text-white">BEARD GROOMING</h4>
                    </div>
                    <div class="prt1btn mb-2">
                        <button class="btn btn-warning" id="servicesBtn">$36.00</button>
                    </div>
                    <div class="prt1btn mb-2">
                        <button class="btn btn-success" id="servicesBtn"><a href="booking.html" class="nav-link"
                                target="_blank">Book Now</a> </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-evenly align-items-end mt-sm-2 mt-md-5">
            <div class=" service3 col-10 col-md-5 mt-2">
                <div class="prtdiv1 d-flex  justify-content-evenly align-items-end">
                    <div class="prt1Heading mb-2">
                        <h4 class="servicesHeading text-white">KID'S HAIRCUT</h4>
                    </div>
                    <div class="prt1btn mb-2 mt-2">
                        <button class="btn btn-warning" id="servicesBtn">$36.00</button>
                    </div>
                    <div class="prt1btn mb-2">
                        <button class="btn btn-success" id="servicesBtn"><a href="booking.html" class="nav-link"
                                target="_blank">Book Now</a> </button>
                    </div>
                </div>
            </div>
            <div class=" service4 col-10 col-md-5 mt-sm-2 mt-2 ">
                <div class="prtdiv1 d-flex  justify-content-evenly align-items-end">
                    <div class="prt1Heading mb-2">
                        <h4 class="servicesHeading text-white">COLOURS AND TREATMENT</h4>
                    </div>
                    <div class="prt1btn mb-2">
                        <button class="btn btn-warning" id="servicesBtn">$36.00</button>
                    </div>
                    <div class="prt1btn mb-2">
                        <button class="btn btn-success" id="servicesBtn"><a href="booking.html" class="nav-link"
                                target="_blank">Book Now</a> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-5">
        <div class="row ">
            <div class="col-lg-7 col-12">
                <h1 class="priceHeading">Price List</h1>
                <p >Starting at $25</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center">Hair Cut
                        <span class="badge bg-primary rounded-pill">

                            $32.00
                        </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Bead Trim
                        <span class="badge bg-primary rounded-pill">

                            $26.00
                        </span>


                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">Razor Cut
                        <span class="badge bg-primary rounded-pill">

                            $36.00
                        </span>

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">Shaves
                        <span class="badge bg-primary rounded-pill">

                            $30.00
                        </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">Styling / Color
                        <span class="badge bg-primary rounded-pill">

                            $25.00
                        </span>
                    </li>
                </ul>
            </div>
            <div class="col-lg-5  ">
                <div id="colorDiv">
                    <div class="backgroundOnly">
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
