import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/navIcon1.svg';
import navIcon2 from '../assets/img/navIcon2.svg';


export const NavBar = () => {
    //managing which link the user is currently on
    const [activeLink, setActiveLink] = useState('home');  //initially set to home
    const [scrolled, setScrolled] = useState(false);  //detect when users scroll class

    //use effect is triggered when user starts to scroll

    useEffect(() => {
        //creating a function here to determine what happens on scroll
        const onScroll = () => {
            if (window.scrollY > 50) { //measure if the height of what has been scrolled is 50
                setScrolled(true);
            } else {
                setScrolled(false); //false if user has not scrolled at least 50 pixels
            }
        }
        //window event listener to be fired when user scrolls, and then the function to be fired
        window.addEventListener("scroll", onScroll); 

        return () => window.removeEventListener("scroll", onScroll); //remove when component is removed from DOM
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar  expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#home" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#home" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="#"><img src={navIcon1} alt="" /></a>
                                <a href="#"><img src={navIcon2} alt="" /></a>
                            </div>
                            <button className='vvd' onClick={() => console.log('connect')}><span>Let's connect</span></button>
                        </span>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}