import img from "./assets/bg2.jpg";
import { FaSearch } from "react-icons/fa";
const Home = () => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4),rgba(0,0,0,0.4)),url(${img})`
            }}
            className="relative h-[650px] bg-bottom md:bg-cover font-prime"
        >
            <div className="container">
                <div className="flex justify-between items-center text-white py-3">
                    <p className="text-3xl text-third font-semibold font-second">
                        <span class="text-white">
                            Touri
                        </span>
                        sm
                    </p>
                    <div className="space-x-10 hidden font-semibold  md:block ">
                        <a
                            href=""
                            className="hover:text-blue-800"
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
                            className="bg-third rounded-md py-2 px-4"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
                <div class="mt-28 md:mt-[150px] text-white text-center capitalize space-y-10">
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
                    <div className="relative z-30 md:w-1/2 mx-auto ">
                        <input
                            className="w-full py-2 px-3 rounded-full   text-black  outline-none"
                            placeholder="Search your destination"
                        />
                        <FaSearch className="h-10 w-12 p-2 pr-2 rounded-r-full text-white text-md  absolute top-0 right-0 bg-third" />
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 -z-[0]"></div>
        </div>
    );
};

export default Home;
