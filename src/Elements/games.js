import Snake from '../Images/snake1.png'
import Memory from '../Images/memory.png'
import Mole from '../Images/mole.png'
import Tic from '../Images/tictactoe.png'
import '../App.css'

const Games=()=>{
    return(
    <div className="Container">
        <div>
            <div className="heading"><span>Snake-and-apple</span></div>
            <img  className="pic" src={Snake} alt=""/>
            <div className="itemContainer">
                <a href="https://github.com/shenoy92/Suraj-Guvi-/tree/main/Snake-game" target="_blank" className="github">GitHub</a>
                <a href="https://snake-and-apple.netlify.app/" target="_blank" className="netlify">netlify</a>
            </div>
        </div>
        <div >
            <div className="heading"><span>Tic-Tak-Toe</span></div>
            <img className="pic" src={Tic} alt=""/>
            <div className="itemContainer">
                <a href="https://github.com/shenoy92/Suraj-Guvi-/tree/main/Tic-Tac-Toe" target="_blank" className="github">GitHub</a>
                <a href="https://epic-goldstine-024a61.netlify.app/" target="_blank" className="netlify">netlify</a>
            </div>
        </div>
        <div >
            <div className="heading"><span>MemoryGame</span></div>
            <img className="pic" src={Memory} alt=""/>
            <div className="itemContainer">
                <a href="https://github.com/shenoy92/Suraj-Guvi-/tree/main/MemoryGame" target="_blank" className="github">GitHub</a>
                <a href="https://short-memory-game.netlify.app/" target="_blank" className="netlify">netlify</a>
            </div>
        </div>
        <div >
            <div className="heading"><span>Whac-a-mole</span></div>
            <img className="pic" src={Mole} alt=""/>
            <div className="itemContainer">
                <a href="https://github.com/shenoy92/Suraj-Guvi-/tree/main/Whac-a-mole" target="_blank" className="github">GitHub</a>
                <a href="https://whac-the-dam-mole.netlify.app/" target="_blank" className="netlify">netlify</a>
            </div>
        </div>
    </div>

    )
}

export default Games