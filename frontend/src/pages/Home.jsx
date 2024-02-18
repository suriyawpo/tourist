import img from "./assets/bg2.jpg";

const Home = () => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6),rgba(0,0,0,0.6)),url(${img})`
            }}
            className="h-[700px] bg-right"
        >
            <div className="container">
                <div className="flex justify-between items-center text-white py-3">
                    <p className="text-5xl text-yellow-400 font-semibold">
                        Tourist
                    </p>
                    <div className="space-x-20 text-lg font-medium">
                        <a
                            href=""
                            className="hover:text-blue-700"
                        >
                            Home
                        </a>
                        <a
                            href=""
                            className=""
                        >
                            About Us
                        </a>
                        <a
                            href=""
                            className=""
                        >
                            Services
                        </a>
                        <a
                            href=""
                            className=""
                        >
                            Contact
                        </a>
                    </div>
                </div>
                <div class="mt-[200px] text-white text-center capitalize space-y-10">
                    {" "}
                    <p class="text-5xl font-bold">
                        your dream
                        vacation awaits
                    </p>
                    <p class="text-lg font-m ">
                        Your journey
                        begins here.
                        Start planning
                        your escape to <br />
                        [Your
                        Destination] and
                        let the magic
                        unfold.
                        Discover,
                        experience, and
                        create memories
                        that will last a
                        lifetime."{" "}
                    </p>
                    <div className="">
                        <input
                            className="rounded-full px-3 py-2 w-1/2 outline-none border-black shadow shadow-amber-400"
                            placeholder="  Search your favourite places"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
