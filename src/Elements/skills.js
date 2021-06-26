import '../App.css'

const Skills=()=>{ 
    return(
        <div className="Container">

            <div className="frontend"><h3>Frontend</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>BOOTSTRAP</li>
                    <li>Material UI</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="backend"><h3>Backend</h3>
                <ul>
                    <li>Node Js</li>
                    <li>Express</li>
                </ul>
            </div>
            <div className="database"><h3>DataBase</h3>
                <ul>
                    <li>MongoDb</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills