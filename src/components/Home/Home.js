import React from 'react';
import img from '../../assets/img/pic.jpg'
import Typewriter from 'typewriter-effect';
const Home = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                <img src={img} className=" sm:w-3/4 mx-auto rounded-full" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Hi! I am Mujahidul Amin</h1>
                    <h2 className="mt-5 text-3xl font-semibold">
                        <Typewriter
                            options={{
                                strings: ['Frontend Web Developer', 'React Developer', 'MERN Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                            
                        />
                    </h2>
                    <p className="py-3 text-justify">My name is Mujahidul Amin. Completed my graduation from Stamford University Bangladesh. I am a front-end web developer, React Developer and MERN stack developer.</p>
                    <button className="btn btn-primary">
                        <a alt="" href="https://drive.google.com/file/d/1VAcbM31JgNQynzHLzOOpPZNG84Nue5-r/view?usp=sharing" target="blank">Download Resume</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;