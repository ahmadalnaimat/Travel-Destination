import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
    return(
        <>
        <div class='footer'>
        <h4>auther: Ahmad alfazaat</h4>
            <div class='icons'>
                <a href="https://www.facebook.com/"><FaFacebook/></a>
                <a href="https://www.instagram.com/"><FaInstagram/></a>
                <a href="https://twitter.com/"><FaSquareXTwitter/></a>
            </div>
        </div>
        </>
    )
}
export default Footer