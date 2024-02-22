import React from "react";
import img from "./assets/girl1.webp";

const App = () => {
    return (
        <div className=" py-4">
            <div className="container  my-4">
                <div className="relative ">
                    <img
                        src={img}
                        alt=""
                        className=""
                    />
                    <div>
                        {" "}
                        <div
                            className="absolute
                    top-1/2 left-1/2 p-8 shadow-lg bg-white hidden md:block"
                        >
                            <p className="text-2xl font-bold capitalize">
                                we
                                provide
                                best
                                tour
                                packages
                                in your
                                budget
                            </p>
                            <p className="mt-4">
                                Lorem
                                ipsum
                                dolor
                                sit
                                amet,
                                consectetur
                                adipisicing
                                elit.
                                Sunt a
                                non
                                consequuntur
                                quaerat,
                                rem, ex
                                tempore
                                consectetur
                                error
                                cum
                                minus.
                            </p>
                            <button className="bg-third px-2 py-1 mt-4 rounded-md text-white">
                                Read
                                more
                            </button>
                        </div>
                        <div className=" p-8 shadow-lg bg-white md:hidden">
                            <p className="text-2xl font-bold capitalize">
                                we
                                provide
                                best
                                tour
                                packages
                                in your
                                budget
                            </p>
                            <p className="mt-4">
                                Lorem
                                ipsum
                                dolor
                                sit
                                amet,
                                consectetur
                                adipisicing
                                elit.
                                Sunt a
                                non
                                consequuntur
                                quaerat,
                                rem, ex
                                tempore
                                consectetur
                                error
                                cum
                                minus.
                            </p>
                            <button className="bg-third px-2 py-1 mt-4 rounded-md text-white">
                                Read
                                more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
