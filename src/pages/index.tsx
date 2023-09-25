// pages/index.tsx
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';  // adjust path if necessary
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import Head from 'next/head';
const HomePage: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,

        });
    }, []);


    return (
        <div>
            <Head>
                <title>BeenHere</title>
            </Head>
            <div className="min-h-screen flex flex-col items-center justify-center bg-black relative md:px-16 px-4 rounded-lg">
                <div className="absolute top-0 left-0 w-full h-full md:px-16 px-4 pt-20 overflow-hidden">
                    <Image src="/pexels-ketut-subiyanto-4429501.jpg" alt="pexels-ketut-subiyanto-4429501" className="w-full h-full object-cover rounded-t-3xl" />
                </div>
                <div className="w-full relative z-10">
                    <div className="text-left">
                        <blockquote className="lg:text-9xl md:text-8xl text-6xl text-white font-bold px-4 ">
                            Capture the <br /><span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 my-4 relative inline-block'>    <span className="relative text-white">moment</span>
                            </span>,<br />leave a mark.
                        </blockquote>
                    </div>
                </div>
                <div className="absolute bottom-0 hover:bg-white cursor-pointer    border-2 border-white m-4 p-4 rounded-full text-white text-center hover:text-black transition duration-300 ease-in-out">
                    <div>
                        <ScrollLink
                            to="section_2"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        > <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ScrollLink>

                    </div>
                </div>
            </div>
            <div id="section_2" className="min-h-screen flex flex-col items-center justify-center bg-black   text-white  ">
                <div className="md:flex-row items-center justify-center md:w-3/4  space-y-4 md:space-y-0 md:space-x-4 w-full  ">
                    <div className="md:flex-1 md:py-10 p-4" data-aos="fade-up">
                        <picture>
                            <source srcSet="https://scontent.whatsapp.net/v/t39.8562-34/315574582_669241857978207_6336028129238262344_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=-A5NiY02C3QAX8Budlt&_nc_oc=AQn1fBy-AQNyqXvENW5hQg1AJLlrnL9CAuTMXLO-MgBoFY0etciyfi1QdSyQ7tIfxz8&_nc_ht=scontent.whatsapp.net&oh=01_AdR1yWdKbplsvpk89oN0KWgxfrb9FqNEpUMmdHdDxO_i1w&oe=65171E0C" media="(min-width: 768px)" />
                            <source srcSet="https://scontent.whatsapp.net/v/t39.8562-34/315639168_1101279470583084_2167618893759059342_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=f1wj_UzFY-0AX-lbOV-&_nc_ht=scontent.whatsapp.net&oh=01_AdR0w9T4_ihUuSqcwqn46Zo62B1q9txAxRRtuOmHZyWKhg&oe=651550EB" media="(min-width: 640px)" />
                            <img
                                src="https://scontent.whatsapp.net/v/t39.8562-34/316527053_519225873581614_3866221552589773492_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=MwVyw8zASlkAX-nsJXs&_nc_ht=scontent.whatsapp.net&oh=01_AdR2z1qBoV4jG2BgZ7b4b30ePmpciP2NGrKBOKTbhz8rzQ&oe=6515E6CB"
                                alt="Example Image"
                                className="w-full object-cover rounded-lg"
                            />
                        </picture>
                    </div>

                    <div className=" py-5 items-center   justify-center text-left w-full space-y-4" data-aos="fade-up" >
                        <p className="text-md px-4">
                            With BeenHere App
                        </p>
                        <h1 className="lg:text-3xl md:text-2xl text-xl   font-bold px-4">
                            You can share your thoughts and experiences from any spesific location in the world.
                        </h1>
                        <h1 className="lg:text-3xl md:text-2xl text-xl     px-4">
                            Whether you&apos;re visiting a new city, exploring an hidden gem or simply want to leave your mark on a special place, BeenHere makes it easy to share your voice.                        </h1>
                    </div>
                    <div className=" md:flex-1 md:py-10 p-4" data-aos="fade-up" >
                        <picture>
                            <source srcSet="https://scontent.whatsapp.net/v/t39.8562-34/315632381_5616928641708856_9210500231334849736_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=nA7HwOIK3KMAX9I5ik0&_nc_ht=scontent.whatsapp.net&oh=01_AdTGHCHJ-IZdBYMK2hwl6rYgV4ZC07dwe9GNcQS55Jbszg&oe=6515E28D" media="(min-width: 768px)" />
                            <source srcSet="https://scontent.whatsapp.net/v/t39.8562-34/315480134_1332364444241595_6824421575333722036_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=LEJ7ETmh0qIAX8ezNHc&_nc_ht=scontent.whatsapp.net&oh=01_AdRiboWRetYgF0z9X4hSxcbnqD_sUNziuKGNjABP-QUfmw&oe=651663B4" media="(min-width: 640px)" />
                            <img
                                src="https://scontent.whatsapp.net/v/t39.8562-34/316548958_5436561303122573_4246709535004834509_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=Y87bJWoa-nUAX9vp4tS&_nc_ht=scontent.whatsapp.net&oh=01_AdRgEAmWHqy7IqY2Kj7sUkAWCdtP7aJMatU0Iwzo-tc62Q&oe=65154CB7"
                                alt="Example Image"
                                className="w-full object-cover rounded-lg"
                            />
                        </picture>
                    </div></div>
            </div>

            <div className="bg-white p-4 md:p-20" >
                <div className="flex flex-col md:flex-row text-black justify-between items-center">

                    <div className="md:flex-2 md:w-1/2" data-aos="fade-up">
                        <h2 className="text-2xl md:text-5xl mb-4">Immortalize Your Adventure: Capture Every Exquisite Moment
                        </h2>
                        <p className="mb-4">
                            Snap and share photos and videos of your discoveries effortlessly with BeenHere. Each capture comes alive with location tags and personalized captions, weaving your unique narrative.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline ">Watch the Video</a>
                    </div>
                    <div className="md:flex-1 p-4 flex justify-center items-center" data-aos="fade-up">
                        <Image
                            src="/beenhere_home.png"
                            alt="Example Image"
                            className="w-full h-[32rem] object-contain"
                        />
                    </div>

                </div>
            </div>    <div className="bg-beenhere_gray p-4 md:p-20">
                <div className="flex flex-col md:flex-row text-white justify-between items-center" data-aos="fade-up">
                    <div className="md:flex-2 md:w-1/2">
                        <h2 className="text-2xl md:text-5xl mb-4">Embrace The Camaraderie: Share Your World With Friends and Fellow Explorers

                        </h2>
                        <p className="mb-4">
                            Connect with friends, share your explorations, and discover new places together. BeenHere turns every user into a part of a global network of explorers, making every journey a shared adventure.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline ">Watch the Video</a>
                    </div>
                    <div className="md:flex-1 p-4 flex justify-center items-center" data-aos="fade-up">
                        <Image
                            src="/beenherefriedns.png"
                            alt="BeenHere Friends"
                            className="w-full md:h-[32rem] object-contain"  // Adjust the max-w-lg to a smaller value if necessary
                        />
                    </div>

                </div>

            </div>    <div className="bg-white p-4 md:p-20">
                <div className="flex flex-col md:flex-row text-black justify-between items-center">
                    <div className="md:flex-2   md:w-1/2" data-aos="fade-up">
                        <h2 className="text-2xl md:text-5xl mb-4">Nostalgic Reverie: Revisit Your Memories, Anytime, Anywhere
                        </h2>
                        <p className="mb-4">
                            Relive your past adventures with a digital diary of places you&apos;ve been. BeenHere keeps your memories vivid, ready to be revisited anytime, enriching your ongoing journey with reflections from the past.

                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Watch the Video</a>
                    </div>
                    <div className="md:flex-1 p-4 flex justify-center items-center" data-aos="fade-up">
                        <Image
                            src="/beenhere_home.png"
                            alt="Beenhere Home"
                            className="w-full h-[32rem] object-contain"  // Adjust the max-w-lg to a smaller value if necessary
                        />
                    </div>

                </div>
            </div>
            <div className=" bg-beenhere_gray   items-center    justify-center    relative">
                <div className="flex flex-col pt-15  md:flex-row md:p-20 p-4" data-aos="fade-up">
                    <div className="flex-2   ">
                        <img
                            src="/pexels-photo-2804411.jpeg"
                            alt="pexels-photo-2804411"
                            className="w-full object-cover h-full"
                        />

                    </div>
                    <div className=" bg-black p-4 flex-col flex items-start justify-between">
                        <div className=' space-y-4 pb-4'>
                            <h1 className="text-6xl mb-2">Capturing <span className='text-blue-300' >moments</span>,<br />creating <span className='text-green-300'>memories</span>.</h1>
                            <p className='text-xl'>Our goal is to help you truly experience a place and connect with others who share your passion for exploration and discovery. Join us today and start leaving your mark on the world!</p>
                        </div>

                        <Link
                            href={'http://download.beenhere.live'}
                            className='relative inline-block px-4 py-2 border-2 border-white text-white rounded-full space-x-2 flex flex-row transition duration-300 ease-in-out hover:bg-white hover:text-[#2A4556] hover:border-transparent  '
                        >Download</Link>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default HomePage;
