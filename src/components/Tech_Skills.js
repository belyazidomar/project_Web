const Skill = ({ subject, progress }) => {
    return (
      <div className="skill">
        <div className="subject">{subject}</div>
        <div className="progress-bar">
          <div className="progress-line" style={{ maxWidth: progress }}></div>
        </div>
      </div>
    );
  };
export default function Formation() {

    return (
        <>
        <div class="container">

            <div class="main-title">
                <h1>
                🖥️​ My Skills
                </h1>
                <p>I have a solid foundation in network design and management, familiar with LAN/WAN technologies, key protocols like TCP/IP, and network security practices.</p>
            </div>

            <div class="row">
                <section class="col">

                    <div class="skills-container">    
                        <Skill subject="Switching and Routing" progress="82%" />
                    </div>

                    <div class="skill">
                        <Skill subject="Linux" progress="77%" />
                    </div>

                    <div class="skill">
                        <Skill subject="Firewall (Fortigate)" progress="85%" />
                    </div>

                    <div class="skill">
                        <Skill subject="Python" progress="70%" />
                    </div>
                </section>

                <section class="col">

                    <div class="skills-container">
                        
                        <div class="skill">
                            <Skill subject="IP Sec and VPN" progress="70%" />
                        </div>

                        <div class="skill">
                            <Skill subject="Virtualisation & cloud" progress="65%" />
                        </div>

                        <div class="skill">
                            <Skill subject="HTML/CSS/React/JS" progress="55%" />
                        </div>

                        <div class="skill">
                            <Skill subject="CSS" progress="94%" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}