import React from "react";
import { MdFlightTakeoff } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { RiCustomerServiceFill } from "react-icons/ri";

const App = () => {
    return (
        <div className="bg-stone-100 py-12">
            <p className="container text-3xl font-bold text-center mb-8">
                Services We{" "}
                <span className="text-third">
                    Offer
                </span>
            </p>
            <div class="container  flex flex-col md:flex-row gap-6 justify-between">
                {" "}
                <div class="flex-1">
                    <div class="mb-8 bg-green-100 w-fit mx-auto rounded-full p-3">
                        <MdFlightTakeoff class="mx-auto size-28 text-third" />
                    </div>
                    <div className="text-center">
                        <p className="text-xl text-third font-bold mb-3">
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
                <div class="flex-1">
                    <div class="mb-8 w-fit bg-green-100 mx-auto rounded-full p-3">
                        <RiHotelLine class="mx-auto size-28 text-thirdh" />
                    </div>
                    <div className="text-center">
                        <p className="text-xl text-third font-bold mb-4">
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
                <div class="flex-1">
                    <div class="mb-8 w-fit bg-green-100 mx-auto rounded-full p-3">
                        <RiCustomerServiceFill class="mx-auto  size-28 text-third" />
                    </div>
                    <div className="text-center">
                        <p className="text-xl text-third font-bold mb-4">
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
