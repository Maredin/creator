import './Cta.scss';

function Cta() {
    return (
        <div className="cta">
            <div className="cta__wrapper">
                <div className="cta__block">
                    <h3>Get a free consultation!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet mauris odio et justo. Et odio at viva.</p>
                    <form action="">
                        <input type="mail" placeholder='Email address' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Cta;