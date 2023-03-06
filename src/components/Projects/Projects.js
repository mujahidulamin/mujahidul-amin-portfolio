import React from "react";
import img1 from "../../assets/img/project-1.jpeg";
import img2 from "../../assets/img/project-2.jpeg";
import img3 from "../../assets/img/project-3.png";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Recycle Mania",
      imgUrl: img1,
      description1:
        "Used products resale website including authentication login",
      description2:
        "Admin/buyer/seller managing their separate things from a dashboard",
      description3:
        "Buyer paying for his/her product from dashboard after booking products.",
      live: "https://recycle-mania-6b358.web.app/",
    },
    {
      id: 2,
      title: "Wildlife Photography",
      imgUrl: img2,
      description1: "Review related website including review adding feature",
      description2:
        "Showing reviews for individual services and removing and editing personal review form review page",
      description3:
        "Anyone can add services and it will appear in the service page",
      live: "https://wildlife-photography-5ef21.web.app/",
    },
    {
      id: 3,
      title: "Enviable Learning",
      imgUrl: img3,
      description1:
        "Educational website including authentication login and register",
      description2:
        "Getting premium access client needs to login or register first",
      description3:
        "Downloading the course details in a PDF format with one click",
      live: "https://enviable-learning.web.app/",
    },
  ];

  console.log(projects);

  return (
    //project section
    <div className="my-5">
      <h2 className="text-center font-bold text-3xl">My Projects</h2>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 justify-center">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3 lg:row-gap-8">
          {projects?.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
