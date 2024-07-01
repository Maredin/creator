import './Footer.scss';
import logo from './img/logo.png';
import teleg from './img/telegram.png';
import facebook from './img/face.png';
import instagram from './img/inst.png';
import inn from './img/in.png';




function Footer() {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__creator">
                    <img src={logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Vitae.</p>
                    <ul>
                        <li><a href=""><img src={teleg} alt="social" /></a></li>
                        <li><a href=""><img src={facebook} alt="social" /></a></li>
                        <li><a href=""><img src={instagram} alt="social" /></a></li>
                        <li><a href=""><img src={inn} alt="social" /></a></li>
                    </ul>
                </div>

                <div className="footer__quick">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>

                <div className="footer__support">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="">Privecy Policy</a></li>
                        <li><a href="">Cookie Policy</a></li>
                        <li><a href="">Purchasing Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                    </ul>
                </div>


                <div className="footer__contact">
                    <h4>Contact me</h4>

                    <ul>
                        <li><a href="">Press</a></li>
                        <li><a href="">Help/Faq</a></li>
                    </ul>

                    <form action="">
                        <input type="mail" placeholder='Email address' />
                        <button>Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}


export default Footer;