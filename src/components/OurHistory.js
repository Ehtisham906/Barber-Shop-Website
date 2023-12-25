import React from 'react'
// import '../styles/ourHistory.css'
export default function OurHistory() {
    return (
        <>
        <body className='bodyColor'>
            
            <div class="container" id="ourHistory">
                <div class="row">
                    {/* <img src="./images/our.jpg" alt="" width="100%" height="100%">  */}

                    <div class="col-lg-8" id="ourHistoryouter">

                        <h1 id="ourHistoryHeading">Full Service <br />
                            {/* <span style="color: orange;"> */}
                                Barber Shop
                            {/* </span> */}
                            </h1>
                        <p id="ourHistorypara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint impedit saepe vero ut quidem
                            voluptas suscipit incidunt, id iusto temporibus enim dolorum nisi vitae magnam accusamus. Debitis,
                            delectus ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ea quos et
                            voluptatibus dolorum iusto incidunt, dolore non aperiam natus fugiat distinctio expedita sapiente
                            soluta, molestias repellat consequuntur. Nemo, iusto?</p>
                        <div class="row">
                            <div class="col-lg-4">
                                <button class="btn" id="ourHistorybtn">BOOK AN APPOINTMENT</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div class="container-fluid d-flex justify-content-center col-lg-12 " id="formScroll">

                <div class="row col-lg-6 col-md-8 col-sm-10 col-12 align-content-center " id="formDiv">
                    <div class="col-12 col-lg-12 text-center justify-content-center">
                        <h1 class="formHeading">Book a Seat</h1>
                        <p>Please fill the form and we will get back to you.</p>
                    </div>
                    <div class="col-12 mt-5">
                        <form action="">
                            <div class="form-group row justify-content-center mt-2">
                                <div class="col-lg-4">
                                    <input type="text" class="form-control" name="fullName" placeholder="Full Name" id="" />
                                </div>
                                <div class="col-lg-4">
                                    <input type="number" class="form-control" name="" placeholder="Mobile 010-020-0340" id="" />
                                </div>
                            </div>

                            <div class="form-group justify-content-center row mt-2">
                                <div class="col-lg-4">
                                    <input type="time" class="form-control" name="fullName" placeholder="6.30" id="" />
                                </div>
                                <div class="col-lg-4">
                                    <input type="date" class="form-control" name="" placeholder="Mobile 010-020-0340" id="" />
                                </div>
                            </div>
                            <div class="form-group justify-content-center row mt-2">
                                <div class="col-lg-4">
                                    <input type="date" class="form-control col-lg-2" name="fullName" placeholder="6.30" id="" />
                                </div>
                                <div class="col-lg-4">
                                    <input type="number" class="form-control col-lg-4" name="" placeholder="Number of People"
                                        id="" />
                                </div>
                            </div>

                            <div class="form-group justify-content-center row mt-2">
                                <div class="col-lg-8 col-md-8">
                                    <textarea name="" class="form-control" id="feedback"
                                        placeholder="Comments (Optional)"></textarea>
                                </div>
                            </div>

                            <div class="form-group row justify-content-center mt-4">
                                <div class="col-lg-4">
                                    <button class="btn btn-danger form-control" id="formBtn">Sumbit</button>

                                </div>
                            </div>
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </body>
        </>

    )
}
