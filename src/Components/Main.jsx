
import myImg from '../assets/photos/WhatsApp Image 2025-11-20 at 11.38.20_15a17c96.jpg'
import Resume from '../assets/photos/Student Athlete Resume.pdf'


function Main() {
  return (
    <div className="cont">

      <div className="container">
        <div className="Myimg">
          <img src={myImg} alt="MyPic" />
        </div>
        <div className="Card">
          <p>
            Hello! Im a passionate <strong>Frontend Developer</strong> with a love for creating visually stunning and
            user-friendly web applications.
            <div className="icons">
              <div style={{ display: "flex", gap: "15px", justifyContent: "center", padding: "20px" }}>
                <a href="" target="_blank" rel="noopener noreferrer">
                 
                </a>
              </div>
            </div>
            <div className="resume">
            <a href={Resume}>Click my Resume</a>

            </div>
          </p>
          

        </div>
      </div>
    </div>
  )
}

export default Main
