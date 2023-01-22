import { Project, PrimitiveProject } from "../types";

const defaultPreview:string = "default-preview.gif";

const projectList:PrimitiveProject[] = [
    {
        name:"Big Red Musix",
        pathToPreview: "Big-Red-Musix.gif",
        buildTools:[
            "TypeScript",
            "React",
            "HTML/CSS",
            "FireBase",
            "Chakra-ui",
            "Next.js",
        ],
        githubLink:"https://github.com/thuypham03/cu-music",
        visitLink:"",
        shortDescripttion:"Discover new music, share your favorite tracks and connect with other music lovers. Experience seamless sorting, liking and following features, all built with React, Firebase, Chakra-ui, and Typescript."
    },
    {
        name:"Pong game",
        pathToPreview: defaultPreview,
        buildTools:[
            "Python",
            "Pygame"
        ],
        githubLink:"https://github.com/EmmanuelDodoo/pong_game",
        visitLink:"",
        shortDescripttion:"Get ready for a nostalgic trip with this classic Pong game, rebuilt using Pygame and Python. Experience the thrill of the retro game with a modern twist."
    },
    {
        name:"Focus Website",
        pathToPreview: "Focus-Website.gif",
        buildTools:[
            "JavaScript",
            "HTML",
            "CSS"
        ],
        githubLink:"https://github.com/CorneliusOsei2/focus",
        visitLink:"",
        shortDescripttion:"Fully-responsive website for Focus Inc. in Ghana. Company is focused on enhancing food accessibility in Africa and advertising farm produce!"
    },    
    {
        name:"Python Video Streaming",
        pathToPreview: defaultPreview,
        buildTools:[
            "Python",
            "Python in-built libraries", 
        ],
        githubLink:"",
        visitLink:"",
        shortDescripttion:"Get your groove on with this Python-powered music playlist. Enjoy a seamless listening experience. Built using only the best of Python's in-built libraries, this playlist is sure to be your go-to for all your music needs."
    },
]

export {projectList}