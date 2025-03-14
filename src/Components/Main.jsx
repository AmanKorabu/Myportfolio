
import myImg from '../assets/photos/myImg.jpg'
import Resume from '../assets/photos/Student Athlete Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
                  <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#E1308C" }} />
                </a>
                <a href="https://wa.me/91 8087115499" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: "#25D366" }} />
                </a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "#0077B5" }} />
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
