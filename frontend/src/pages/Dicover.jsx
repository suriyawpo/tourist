import React from "react";
import Dest from "./assets/dest.jpeg";
import Activity from "./assets/activity.jpeg";
import Guide from "./assets/guide.jpeg";
const App = () => {
    return (
        <div className="">
            <div className="container my-12">
                <p className="capitalize text-center font-bold text-3xl font-se">
                    discover and
                    <span className="text-third ml-1">
                        Explore
                    </span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {" "}
                    <div class="shadow-xl bg-white rounded-md overflow-hidden p-2">
                        <div class="">
                            <img
                                src={
                                    Dest
                                }
                                alt=""
                            />
                        </div>
                        <div class="p-3 ">
                            <p class="text-third font-bold text-lg">
                                Explore
                                beautiful
                                destinations
                            </p>
                            <p class="">
                                Explore
                                the
                                enchanting
                                beauty
                                of
                                [Destination].
                                From
                                iconic
                                landmarks
                                to
                                hidden
                                gems,
                                this
                                destination
                                offers a
                                rich
                                tapestry
                                of
                                culture
                                and
                                history.
                            </p>
                        </div>
                    </div>{" "}
                    <div class="shadow-xl bg-white  rounded-md overflow-hidden p-2">
                        <div class="aspect-video">
                            <img
                                src={
                                    Activity
                                }
                                alt=""
                            />
                        </div>
                        <div class="p-3 ">
                            <p class="text-third font-bold text-lg">
                                Action
                                packed
                                experience
                            </p>
                            <p class="">
                                Immerse
                                yourself
                                in the
                                thrill
                                of
                                [Activity].
                                Whether
                                you're a
                                novice
                                or an
                                expert,
                                our
                                guided
                                tours
                                promise
                                an
                                unforgettable
                                adventure.{" "}
                            </p>
                        </div>
                    </div>{" "}
                    <div class="shadow-xl bg-white  rounded-md overflow-hidden p-2">
                        <div class="">
                            <img
                                src={
                                    Guide
                                }
                                alt=""
                            />
                        </div>
                        <div class="p-3 ">
                            <p class="text-third font-bold text-lg">
                                Local
                                guides
                            </p>
                            <p class="">
                                Embrace
                                the
                                local
                                culture:
                                [Cultural
                                Tip].Getting
                                around:
                                [Transportation
                                Tips].Safety
                                first:
                                [Safety
                                Advice].Explore
                                Further:
                                Check
                                out our
                                in-depth
                                travel
                                guides
                                for a
                                seamless
                                journey.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
