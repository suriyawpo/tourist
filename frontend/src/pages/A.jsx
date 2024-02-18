import React from "react";
import img from "./assets/girl1.webp";
const App = () => {
    return (
        <div class="bg-stone-100">
            <div className="container mt-12 ">
                <div class="relative">
                    <img
                        src={img}
                        alt=""
                    />
                    <div class="absolute top-1/3 left-1/2 p-8 shadow-lg bg-white">
                        <p class="text-2xl font-bold capitalize">
                            we provide
                            best tour
                            packages in
                            your budget
                        </p>
                        <p class="mt-4">
                            Lorem ipsum
                            dolor sit
                            amet,
                            consectetur
                            adipisicing
                            elit. Sunt a
                            non
                            consequuntur
                            quaerat,
                            rem, ex
                            tempore
                            consectetur
                            error cum
                            minus.
                        </p>
                        <button class="bg-third px-2 py-1 mt-4 rounded-md text-white">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
