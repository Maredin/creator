import Header from "../Header/Header";
import './Heading.scss';
import foto from './img/foto.png'


function Heading() {
    return (
        <div className="heading">
            <Header />

            <ul className="boadcum">
                <li><a href="">Home</a></li>
                <li> &gt; About</li>
            </ul>

            <div className="heading__main">
                <div className="heading__main-left">
                    <h2>Content Services</h2>
                    <h1>I write professional<br />product content</h1>

                    <div>
                        <p>Elementum, amet, sagittis mollis tristique viverra at.</p>
                        <p><span>Feugiat scelerisque:</span> Duis tincidunt ipsum faucibus massa faucibus eget nunc. Tempus sed.Duis tincidunt ipsum faucibus massa faucibus eget nunc. Tempus sed.</p>
                    </div>

                </div>

                <div className="heading__main-right"><img src={foto} alt="foto" /></div>
            </div>

        </div>
    )
}

export default Heading;