import {useState} from 'react'
import Profile from './Images/profile.jpg'
import Games from './Elements/games'
import Skills from './Elements/skills'
import Projects from './Elements/project'
import Resume from './Resume/Resume.pdf'
import './App.css'
import DocViewer from "react-doc-viewer";
const App=()=>{
    const [toogleskill, setSkillToggle] = useState(true);
    const [tooglegames, setGamesToggle] = useState(true);
    const [toogleprojects, setProjectsToggle] = useState(true);
    return (
        <>
    
            <div className="header">Hi, I'm Suraj Shenoy</div>
            <div className="body">
                <div className="topContainer">
                    <div className="imgContainer">
                        <img src= {Profile}alt=""/>
                    </div>
                    <div className="aboutContainer">
                        <h1 className="about">About 😃</h1>
                        <p className="about-para">I am a Engineer,who completed my B.E from Canara Engineering college Mangalore.Now, in pursuit to become  a  good Software Engineer.</p>
                        <p>I would describe myself in just three words.</p>
                        <ul>
                            <li>SmartWorker</li>
                            <li>Creative</li>
                            <li>Perseverent</li>
                        </ul>
                    </div>
                </div>
                
                <h2>Skills👨‍💻  <i className="fas fa-angle-double-down " onClick={()=>setSkillToggle(!toogleskill)}></i></h2>
                <>{!toogleskill && <Skills/>}</>

                
                <h2>JS Games😎 <i className="fas fa-angle-double-down " onClick={()=>setGamesToggle(!tooglegames)}></i></h2>
                <>{!tooglegames && <Games/>} </>

                <h2>Projects📑 <i className="fas fa-angle-double-down " onClick={()=>setProjectsToggle(!toogleprojects)}></i></h2>
                <>{!toogleprojects && <Projects/>}</>   
                
                <div>
          	        <h2>Resume: click here to 👉<a href={Resume} target="_blank">View</a></h2>
                     

                </div>
                <div>
                    <h2>My Intrests: Space buff 👨‍🚀, Scifi movies 👨‍🔬,  Animes 🤩.</h2>
                </div>
                <div className="Contact">
                    <span>Contact Number: 9148387831</span>
                    <span >E-mail: suraj088shenoy@gmail.com</span>
                </div>
            </div>
        </>
    )
}

export default App