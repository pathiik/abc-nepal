import { useState } from 'react';

export default function Intro() {

    const [showMenu, setShowMenu] = useState(false)

    function toggleMenuBar() {
        setShowMenu(!showMenu)
    }

    showMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'

    return (
        <section className="intro-sec">
            <div className="container">
                <div className="intro-wrapper">
                    <header className="header-sec">
                        <i id='header-more-menu' class="fa-solid fa-bars-staggered" onClick={toggleMenuBar} style={{ color: '#ffffff' }}></i>
                        <nav className="nav-bar">
                            <ul className="nav-bar-list">
                                <li><a className="active" href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">What We Do</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                        <div className="header-btn-box">
                            <a id="header-donate-btn" className="donate-btn sharp-btn btn" href="#">
                                Donate
                            </a>
                        </div>
                    </header>
                    <div className="hero-sec">
                        <p id="hero-content-1">Rescue. Rehabilitate. Re-establish.</p>
                        <h4 id="hero-content-2">ABC NEPAL</h4>
                        <p id="hero-content-3">50+ projects across the country</p>
                        <h1 id="hero-content-4">Women in action</h1>
                        <h3 id="hero-content-5">We work towards ensuring a life free from trafficking and domestic violence for every woman.</h3>
                        <a id="hero-join-btn" className="btn" href="#">Join our work</a>
                    </div>
                </div>
            </div>
            <nav className={`nav-bar-hidden ${showMenu ? 'show' : ''}`}>
                <div className='nav-bar-hidden-close-icon'>
                    <i id='header-nav-bar-ham' class="fa-solid fa-xmark" onClick={toggleMenuBar} style={{ color: '#fff' }}></i>
                </div>
                <ul className="nav-bar-list-hidden">
                    <li><a className="active" href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">What We Do</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

        </section>
    )
}