import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    //footer section
    <div className=" bg-slate-900 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link
            to='/'
            aria-label='Smart Home'
            title='Smart Home'
            className='inline-flex items-center'
          >
            <img className='img' src="" alt="" />
            <span className=' text-xl font-bold tracking-wide text-white uppercase'>
              Mujahidul Amin
            </span>
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-white">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-white hover:text-deep-purple-800"
            >
              +88015212-05892
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-white hover:text-deep-purple-800"
            >
              mujahidulAmin1108152@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-white hover:text-deep-purple-800"
            >
              Dhaka, Bangladesh
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-white">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.linkedin.com/in/mujahidul-amin/"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              target= "blank"
            >
              <FaLinkedinIn className="text-xl"></FaLinkedinIn>
            </a>
            <a
              href='https://www.facebook.com/mujahidul.amin/'
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              target= "blank"
            >
              <FaFacebookF className="text-xl"></FaFacebookF>
            </a>
            <a
              href='https://github.com/mujahidulamin'
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              target= "blank"
            >
              <FaGithub className="text-xl"></FaGithub>
            </a>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white text-center">
          © Copyright 2022 <span className="text-cyan-400 font-bold">Mujahidul Amin</span> All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer