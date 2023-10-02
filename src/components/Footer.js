export default function Footer() {

    return (
        <footer className="footer-sec">
            <div className="container">
                <div className="footer-up-wrapper">
                    <div className="footer-top">
                        <div className="footer-top-left">
                            <img className="footer-top-logo" src="Assets/footer-logo.png" alt="ABC Nepal" />
                            <p id="footer-top-left-content-1">We envision a just and balanced society for all where women are free of fear and empowered to the best of our ability.</p>
                            <div className="footer-top-left-social-links-area">
                                <h2 id="footer-top-left-follow" className="footer-titles">Follow Us</h2>
                                <div className="footer-top-left-social-icons-box">
                                    <a className="footer-social-icons" href="#">
                                        <img src="Assets/footer-icon-fb.png" alt="Facebook" />
                                    </a>
                                    <a className="footer-social-icons" href="">
                                        <img src="Assets/footer-icon-twitter.png" alt="Twitter" />
                                    </a>
                                    <a className="footer-social-icons" href="">
                                        <img src="Assets/footer-icon-insta.png" alt="Instagram" />
                                    </a>
                                    <a className="footer-social-icons" href="">
                                        <img src="Assets/footer-icon-yt.png" alt="Youtube" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-top-mid">
                            <h2 id="footer-top-mid-content-1" className="footer-titles">What We Do</h2>
                            <ul className="footer-top-mid-list">
                                <li>Rescue, Rehabilitation and Education</li>
                                <li>Healthcare & awareness</li>
                                <li>Building feminist leadership</li>
                                <li>Expanding reproductive freedoms</li>
                                <li>Training Programs</li>
                            </ul>
                        </div>
                        <div className="footer-top-right">
                            <h2 className="footer-titles">Subscribe</h2>
                            <form className="subscribe-form">
                                <input type="email" placeholder="Enter your email..." />
                                <button type="submit" id="form-sub-btn" className="sharp-btn btn" >Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-mid">
                        <p className="footer-mid-content">We are a voluntary organization registered in 1988 with a sole purpose of rescuing the victims of human trafficking and rehabilitate them back into the society. All donations given to ABC Nepal will be audited through Nepal Government and utilized as per the contracts set up with the donor.</p>
                    </div>
                </div>
            </div>
            <hr id="footer-hr" />
            <div className="footer-down">
                <div className="container">
                    <div className="footer-down-wrapper">
                        <p className="footer-down-content-1">Copyright &copy; 2023 Agro-Forestry, Basic Health and Cooperatives: ABC Nepal</p>
                        <p className="footer-down-content-2">Powered by Agro-Forestry, Basic Health and Cooperatives: ABC Nepal</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}