import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';
import github from '../media/github.png'
import linkedin from '../media/linkedin.png'
import s from './Styles/FullPage.module.css';

function FullPage() {
  return (
    <div>
    <Fullpage>
        <FullpageNavigation/>
        <FullPageSections>
            <FullpageSection className = {s.pages1}>
                <div className = {s.div1}>
                    <h1>FULL-STACK</h1>
                </div>
                <div className = {s.div2}>
                    <h1>DEVELOPER</h1>
                    <div className = {s.div3}>
                        <p>I'm Lautaro Arnay, a developer from Argentina over thousand hours coding, open to-work, focusing and seriously engaged to learning.</p>
                    </div>
                </div>
                <h5>Scroll down ↧</h5>
            </FullpageSection>
            <FullpageSection className = {s.pages2}>
                <div className = {s.div4}>
                    <h1>SKILLS</h1>
                    <h1 className={s.skills2}>SKILLS</h1>
                    <h1>SKILLS</h1>
                </div>
                <div className = {s.div5}>
                    <div className = {s.skill}>
                        <div className = {s.div6}>
                        <div className = {s.skillName}>JAVASCRIPT</div>
                        <div className = {s.skillBar}>
                            <div className = {s.skillsPer} per='80%' style = {{maxWidth: "80%"}}></div>
                        </div>
                        </div>

                        <div className = {s.div6}>
                        <div className = {s.skillName}>TYPESCRIPT</div>
                        <div className = {s.skillBar}>
                            <div className = {s.skillsPer} per='70%' style = {{maxWidth: "70%"}}></div>
                        </div>
                        </div>

                        <div className = {s.div6}>
                        <div className = {s.skillName}>REACT</div>
                        <div className = {s.skillBar}>
                            <div className = {s.skillsPer} per='95%' style = {{maxWidth: "95%"}}></div>
                        </div>
                        </div>

                        <div className = {s.div6}>
                        <div className = {s.skillName}>REDUX</div>
                        <div className = {s.skillBar}>
                            <div className = {s.skillsPer} per='90%' style = {{maxWidth: "90%"}}></div>
                        </div>
                        </div>

                        <div className = {s.div6}> 
                        <div className = {s.skillName}>NODE</div>
                        <div className = {s.skillBar}>
                            <div className = {s.skillsPer} per='85%' style = {{maxWidth: "85%"}}></div>
                        </div>
                        </div>

                        <div className = {s.div6}>
                        <div className = {s.skillName}>EXPRESS</div>
                        <div className = {s.skillBar}>
                            <div className = {s.skillsPer} per='80%' style = {{maxWidth: "80%"}}></div>
                        </div>
                        </div>

                        <div className = {s.div6}>
                        <div className = {s.skillName}>SEQUELIZE</div>
                        <div className = {s.skillBar}>
                            <div className = {s.skillsPer} per='83%' style = {{maxWidth: "83%"}}></div>
                        </div>
                        </div>

                        <div className = {s.div6}>
                        <div className = {s.skillName}>FIREBASE</div>
                        <div className = {s.skillBar}>
                            <div className = {s.skillsPer} per='88%' style = {{maxWidth: "88%"}}></div>
                        </div>
                        </div>

                        <div className = {s.div6}>
                        <div className = {s.skillName}>GIT</div>
                        <div className = {s.skillBar}>
                            <div className = {s.skillsPer} per='75%' style = {{maxWidth: "75%"}}></div>
                        </div>
                        </div>
                    </div>
                </div>
            </FullpageSection>
            <FullpageSection className = {s.pages3}>
                <div className = {s.div8}>
                    <h1 className = {s.line2}><a href = "https://mypc.vercel.app/">ECOMMERCE</a></h1>
                    <h1 className = {s.line2}><a href = "https://pi-dogs-brown.vercel.app/">PET HOUSE</a></h1>
                    <h1 className = {s.line2}><a href = "https://my-app-one-pied.vercel.app/">IMAGE SEARCH</a></h1>
                    <h1 className = {s.line2}>WEATHER APP</h1>
                    </div>
                <div className = {s.div7}>
                    <h1>PROJECTS</h1>
                    <h1 className = {s.projects}>PROJECTS</h1>
                    <h1>PROJECTS</h1>
                </div>
            </FullpageSection>
            <FullpageSection className = {s.pages4}>
                <div className = {s.contact}>
                    <a href = "mailto:lautaroarnay@gmail.com">lautaroarnay@gmail.com</a>
                </div>
                <div className = {s.animatedText}>
                    <div className = {s.line}>WANNA BE STARTING SOMETHING?</div>
                    <div className = {s.line}>LET'S TALK</div>
                    <div className = {s.line}>SAY HELLO</div>
                    <div className = {s.line}>CONTACT ME</div>
                </div>
                <div className = {s.redes}>
                    <a href="https://github.com/lautaro2021"><img src = {github} alt = "GitHub" className = {s.images}></img></a>
                    <a href="https://www.linkedin.com/in/lautaroagustinarnay/"><img src = {linkedin} alt = "LinkedIn" className = {s.images}></img></a>
                </div>
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
    </div>
  )
}

export default FullPage