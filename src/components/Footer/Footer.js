import styles from "./Footer.css";
export default function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-section">
                <p className="title">ResumeBuilder.com</p>
                <p>ResumeBuilder is a place where you can build <br/>your resume in a good format And <br/>our service is absolutely free.</p>
                <p>&copy; 2023 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>deepshikhad222@gamil.com</p>
                <p>+933 785 4220</p>
                <p>804408 street JBD</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
            
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
        
            </div>
        </div>
    )
}