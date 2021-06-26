import Brokerage from '../Images/Brokerage.png'
import Chat from '../Images/chat.png'
import List from '../Images/To-do-List.png'
import '../App.css'
const Projects=()=>{
    return(
        <div className="Container">
        <div>
            <div className="heading"><span>House-Brokerage-app</span></div>
            <img className="pic" src={Brokerage} alt=""/>
            <div className="itemContainer">
            <a href="https://github.com/shenoy92/fullstack-housebrokerage-app" target="_blank" className="github">GitHub</a>
            <a href="https://house-brokerage-app.netlify.app/" target="_blank" className="netlify">netlify</a>
            </div>
        </div>
        <div>
            <div className="heading"><span>Chat-App</span></div>
            <img className="pic" src={Chat} alt=""/>
            <div className="itemContainer">
                <a href="https://github.com/shenoy92/fullstack-chat-app" target="_blank" className="github">GitHub</a>
                <a href="https://60d199f61461d1a1c8938693--pedantic-fermi-415340.netlify.app/" target="_blank" className="netlify">netlify</a>
            </div>
        </div>
        <div>
            <div className="heading"><span>To-do-list</span></div>
            <img className="pic" src={List} alt=""/>
            <div className="itemContainer">
                <a href="https://github.com/shenoy92/fullstack-to-do-list" target="_blank" className="github">GitHub</a>
                <a href="https://toodo-list-app.netlify.app/" target="_blank" className="netlify">netlify</a>
            </div>
        </div>
    </div>
    )
}


export default Projects;