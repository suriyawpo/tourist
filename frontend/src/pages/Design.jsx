import React from "react";
import { MdFlightTakeoff } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";

const App = () => {
    return (
        <div className="bg-stone-100 py-12">
            <p className="container text-3xl font-bold text-center mb-8">
                Why We Are{" "}
                <span className="text-third">
                    Best
                </span>
            </p>
            <div class="container  flex flex-col md:flex-row gap-6 justify-between">
                {" "}
                <div class="">
                    <div class="mb-8 bg-green-100 w-fit mx-auto">
                        <MdFlightTakeoff class="mx-auto size-28 text-thirdh" />
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">
                            Flight
                            Booking
                        </p>
                        <p className="text-justify">
                            Lorem ipsum
                            dolor sit
                            amet,
                            consectetur
                            adipisicing
                            elit.
                            Incidunt
                            ratione
                            accusamus
                            voluptatum.
                        </p>
                    </div>
                </div>{" "}
                <div class="">
                    <div class="mb-8 w-fit bg-green-100 mx-auto">
                        <FaHotel class="mx-auto size-28 text-thirdh" />
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">
                            Hotel
                            Reservation
                        </p>
                        <p className="text-justify">
                            Lorem ipsum
                            dolor sit
                            ident
                            cupiditate
                            tempore
                            tempora
                            facilis!
                        </p>
                    </div>
                </div>{" "}
                <div class="">
                    <div class="mb-8 w-fit bg-green-100 mx-auto">
                        <RiCustomerServiceFill class="mx-auto size-28 text-thirdh" />
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">
                            24/7
                            Customer
                            Support
                        </p>
                        <p className="">
                            Lorem ipsum
                            illum est
                            porro
                            provident
                            cupiditate
                            tempore
                            tempora
                            facilis!
                        </p>
                    </div>
                </div>{" "}
            </div>
        </div>
    );
};

export default App;
