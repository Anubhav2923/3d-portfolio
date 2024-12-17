import './skills.css'


const Skills = () => {
  return (
    <div className='skills'>
        <div className="skillContainer">
            <div className="skillBgVideo opacity-30">
                <video loop muted autoPlay>
                <source src='./cards-video.webm'/>
                </video>
            </div>
            <div className="skillHeading">
                <div className="heading">
                <h1>Making apps with modern technologies</h1>
                </div>
                <div className="tagLine">
                    <p>Never miss a task, deadlikne or idea</p>
                </div>

            </div>
            <div className="skillsImg flex overflow-hidden">
               <div className="imgContainer1 flex">
               <img src="./html.png" alt="" />
                <img src="./css.png" alt="" />
                <img src="./js.png" alt="" />
                <img src="./tailwind.png" alt="" />
                <img src="./react.png" alt="" />
                <img src="./express.png" alt="" />
                <img src="./node-js.png" alt="" />
                <img src="./mysql.png" alt="" />
               </div>
               <div className="imgContainer2">
               
                <img src="./mongodb.png" alt="" />
                <img src="./ts.png" alt="" />
                <img src="./Firebase.png" alt="" />
                <img src="./figma.png" alt="" />
                <img src="./gitwhite.png" alt="" />
               </div>
               
            </div>

        </div>
    </div>
  )
}

export default Skills