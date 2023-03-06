import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {

    const project = useLoaderData()
    console.log(project);


    return (
        //project details section
        <div class="max-w-4xl mx-6 lg:m-auto md:m-auto lg:my-8 my-8 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img alt='' src={project.imgUrl} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt='' src={project.imgUrl1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt='' src={project.imgUrl2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

            <div class="p-6">
                <div>
                    <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400 block mb-4">Project - {project.project}</span>
                    <div className='flex justify-between sm:
                flex-col lg:flex-row gap-4'>
                        <span> <a alt="" href={project.live} target="blank" class="mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{project.title}</a></span>
                        <span>
                            <button className='btn btn-sm'>
                                <a href= {project.githubClient} target="blank">Github Client Link</a>
                            </button>
                        </span>
                        <span>
                            <button className='btn btn-sm'>
                                <a href= {project.githubServer} target = "blank">Github Server Link</a>
                            </button>
                        </span>
                        <span>
                            <button className='btn btn-sm'>
                                <a href= {project.live} target = "blank">Live Site Link</a>
                            </button>
                        </span>
                    </div>
                    <h1 className='text-xl mt-6 font-semibold'>**Features and functionality**</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.description1}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.description2}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.description3}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.description4}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.description5}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.description6}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.description7}</p>
                    <h1 className='text-xl mt-4 font-semibold'>**Front End Technologies And Tools**</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology1}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology2}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology3}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology4}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology5}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology6}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology7}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology8}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology9}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology10}</p>
                    <h1 className='text-xl mt-4 font-semibold'>**Back End Technologies And Tools**</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology11}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology12}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology13}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology14}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> {project.technology15}</p>
                </div>

                <div class="mt-4">
                    <div class="flex items-center">
                        <div class="flex items-center">

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;