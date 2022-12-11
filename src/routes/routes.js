import { createBrowserRouter } from 'react-router-dom'
import AboutMe from '../components/AboutMe/AboutMe'
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home'
import ProjectDetails from '../components/Projects/ProjectDetails';
import Projects from '../components/Projects/Projects';
import Main from '../layout/main'
import Skills from './../components/Skills/Skills';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/aboutme',
            element: <AboutMe></AboutMe>
        },
        {
            path: '/projects',
            element: <Projects></Projects>
        },
        {
            path: '/project/:id',
            element: <ProjectDetails></ProjectDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/projects/${params.id}`)
        },
        {
            path: '/skills',
            element: <Skills></Skills>,
        },
        {
            path: '/contact',
            element: <Contact></Contact>,
        },
        {
            path: '/blog',
            element: <Blog></Blog>,
        },
        

    ],
  },
])

export default router