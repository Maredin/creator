import './Header.scss';
import logo from './img/logo.svg'

function Header() {
    return (
        <div className="header">
            <a href="#" className="header__logo"><img src={logo} alt="logo" /></a>

            <div className="header__nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <button className="header__talk">Contact</button>
        </div>
    )
}


export default Header;