import React from "react";

const App = ({ dest }) => {
    return (
        <div class="bg-white shadow-lg p-2 rounded-lg">
            <div class=" relative">
                <img
                    src={dest.img}
                    alt=""
                    class="size-full"
                />
                <p class="mx-auto bottom-0 left-0 p-1 text-white bg-third rounded-r-md absolute capitalize">
                    {dest.destination}
                </p>
            </div>
            <div class="p-2 text-center">
                <p class="mb-2 text-left">
                    Lorem ipsum dolor
                    sit amet,
                    consectetur
                    adipisicing elit.
                    Ratione, eligendi,
                    obcaecati adipisci.
                </p>
                <a
                    href=""
                    class=" text-blue-800 capitalize"
                >
                    view
                </a>
            </div>
        </div>
    );
};

export default App;
