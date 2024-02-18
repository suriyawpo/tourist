import img from "./assets/bg2.jpg";
import { FaSearch } from "react-icons/fa";
const Home = () => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4),rgba(0,0,0,0.4)),url(${img})`
            }}
            className="h-[700px] bg-right font-prime"
        >
            <div className="container">
                <div className="flex justify-between items-center text-white py-3">
                    <p className="text-3xl text-third font-semibold font-second">
                        Tourist
                    </p>
                    <div className="space-x-20 hidden md:block">
                        <a
                            href=""
                            className=""
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
                    <p class="text-5xl font-bold font-second">
                        your dream
                        vacation awaits
                    </p>
                    <p class="">
                        Explore the
                        wonders of our
                        enchanting
                        destination!
                        Immerse yourself
                        in rich history,
                        breathtaking
                        landscapes, and
                        vibrant
                        cultures. Plan
                        your next
                        adventure with
                        us and create
                        memories that
                        last a lifetime.
                    </p>
                    <div className="relative md:w-1/2 mx-auto ">
                        <input
                            className="w-full py-2 px-3 rounded-full   text-black  outline-none"
                            placeholder="Search your destination"
                        />
                        <FaSearch className="h-10 w-12 p-1 rounded-r-full text-white  absolute top-0 right-0 bg-third" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
