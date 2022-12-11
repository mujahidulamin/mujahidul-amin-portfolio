import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {

    console.log(project);

    const { id, title, description1, description2, description3, imgUrl, live } = project;


    return (
        <div>
            <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div class="px-4 py-2">
                    <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 text-justify">*{description1} </p>
                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 text-justify">*{description2}</p>
                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 text-justify">*{description3} </p>
                </div>
                <img class="object-cover w-full h-48 mt-2" src={imgUrl} alt="project" />
                <div class=" flex items-center justify-between text-center px-4 py-2 bg-gray-900">
                <button className='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
                    <a href= {live} target = "blank">Visit Live Site</a>
                    </button>

                    <Link to={`/project/${id}`}>
                        <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Details</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Project;