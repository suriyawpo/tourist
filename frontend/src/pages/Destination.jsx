import React from "react";
import Dest from "./Dest";
import australia from "./assets/Australia.jpg";
import bermuda from "./assets/Bermuda.jpg";
import colombia from "./assets/Colombia.jpg";
import maldives from "./assets/maldives.jpg";
import santorini from "./assets/santorini.jpg";
import iceland from "./assets/Western-Iceland.jpg";

const destinations = [
    {
        img: australia,
        destination: "Australia"
    },
    {
        img: bermuda,
        destination: "bermuda"
    },
    {
        img: colombia,
        destination: "colombia"
    },
    {
        img: maldives,
        destination: "maldives"
    },
    {
        img: santorini,
        destination: "santorini"
    },
    {
        img: iceland,
        destination: "iceland"
    }
];

const App = () => {
    return (
        <div className="">
            <div className="container my-12">
                <p className="capitalize text-center font-bold text-3xl font-se">
                    explore top
                    <span className="text-third ml-1">
                        Destinations
                    </span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {destinations.map(
                        (
                            des,
                            index
                        ) => (
                            <Dest
                                key={
                                    index
                                }
                                dest={
                                    des
                                }
                            />
                        )
                    )}
                </div>
                <div class="text-center mt-4">
                    <button class="bg-third px-2 py-1 mt-4 rounded-md text-white">
                        Explore more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
