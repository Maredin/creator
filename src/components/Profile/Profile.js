import "./Prifile.scss";


function Profile() {
    return (
        <div className="profile">
            <div className="profile__woman">
                <div className="profile__woman-wrap">
                    <div className="profile__woman-item">
                        <h3>455+</h3>
                        <p>Clients worked with</p>
                    </div>

                    <div className="profile__woman-item">
                        <h3>5245+</h3>
                        <p>Article published</p>
                    </div>

                    <div className="profile__woman-item">
                        <h3>250+</h3>
                        <p>Happy client</p>
                    </div>

                </div>
            </div>

            <div className="profile__about">
                <h3 className="profile__about-title">Professionalism is my priority.</h3>
                <p className="profile__about-desc">Consectetur adipiscing elit. Interdum aliquam id aliquet leo fermentum morbi. Cursus enim donec elit sit tristique pretium in odio ut. Sed dolor purus faucibus cursus. </p>

                <div className="profile__about-wrapper">
                    <div className="profile__about-item">
                        <h4>Submit a request</h4>
                        <p>Consectetur adipiscing elit. Interdum aliquam id aliquet leo fermentum morbi. Cursus enim donec elit sit.</p>

                        <div className="profile__about-item-before">
                            1
                        </div>
                        <div className="profile__about-item-dash"></div>
                    </div>

                    <div className="profile__about-item">
                        <h4>Take the progress</h4>
                        <p>Consectetur adipiscing elit. Interdum aliquam id aliquet leo fermentum morbi. Cursus enim donec elit sit.</p>

                        <div className="profile__about-item-before">
                            2
                        </div>
                        <div className="profile__about-item-dash"></div>
                    </div>

                    <div className="profile__about-item">
                        <h4>Final review</h4>
                        <p>Consectetur adipiscing elit. Interdum aliquam id aliquet leo fermentum morbi. Cursus enim donec elit sit.</p>

                        <div className="profile__about-item-before">
                            3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profile;

