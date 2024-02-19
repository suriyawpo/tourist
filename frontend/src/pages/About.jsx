import React from "react";
import img from "./assets/girl2.jpg";
import bg from "./assets/bg3.webp";
const About = () => {
    return (
        <div class=" bg-white bg-no-repeat bg-cover text-whie">
            <div class="container py-12">
                <p class="text-3xl text-center font-bold mb-4">
                    About{" "}
                    <span class="text-third mr-1">
                        Us
                    </span>
                </p>
                <div class="flex flex-col items-center gap-8 md:flex-row">
                    <div class="flex-1">
                        <img
                            src={img}
                            alt=""
                        />
                    </div>
                    <div class="flex-1 p-4">
                        <p class="text-xl font-semibold mb-6">
                            welcome to
                            <p className="text-3xl text-third font-semibold font-second">
                                <span class="">
                                    Touri
                                </span>
                                sm
                            </p>
                        </p>
                        <p class="">
                            At Tourism,
                            we are
                            passionate
                            about
                            creating
                            unforgettable
                            travel
                            experiences
                            that go
                            beyond the
                            ordinary. As
                            avid
                            explorers
                            ourselves,
                            we
                            understand
                            the
                            transformative
                            power of
                            travel and
                            its ability
                            to broaden
                            perspectives,
                            ignite
                            inspiration,
                            and create
                            lasting
                            memories.
                        </p>
                        <p class="hidden text-xl font-semibold text-black my-6">
                            Our Mission
                        </p>
                        <p class="hidden">
                            Our mission
                            is simple
                            yet
                            profound: to
                            curate
                            exceptional
                            journeys
                            that
                            captivate
                            the senses,
                            connect
                            travelers
                            with diverse
                            cultures,
                            and leave a
                            positive
                            impact on
                            the
                            destinations
                            we touch. We
                            believe in
                            responsible
                            tourism that
                            respects
                            local
                            communities,
                            preserves
                            natural
                            environments,
                            and enriches
                            the lives of
                            both our
                            clients and
                            the places
                            they visit.
                        </p>
                        <button class="bg-third px-2 py-1 mt-4 rounded-md text-white mr-0">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
