import GitHub from "./GitHub.jpg"
import Linkedin from "./Linkedin.png"
import Formulaire from "../pages/Formulaire"

export default function Header() {
    return (
    <nav className="nav-bar">
      <div className="contact-info">
        <p>Name: Bel-Yazid Omar</p>
        <p>Phone: +212 691154534</p>
        <p>Email: belyazidomar01@gmail.com</p>
        <p>
            <a href="https://www.linkedin.com/in/omar-bel-yazid-068818227/"> Linkedin: 
            <img src={Linkedin} alt="LinkedIn" style={{ width: '25px', height: '25px' }}/>
            </a>
            <a href="https://github.com/belyazidomar/Project/tree/master"> Github:
            <img src={GitHub} alt="GitHub" style={{ width: '25px', height: '25px' }} />
            </a>
        </p>
        </div>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/Formulaire">Formulaire</a>
            </li>
        </ul>
        </nav>
    )
}